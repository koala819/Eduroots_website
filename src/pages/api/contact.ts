import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

function mailContact(firstName: string, lastName: string, message: string, email: string, phone: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Nouveau message concernant Eduroots</h2>
      <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${phone}</p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
      <p style="color: #666; font-size: 12px;">Cet email a été envoyé depuis le formulaire de contact de votre site.</p>
    </div>
  `;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!request) {
      return new Response(
        JSON.stringify({
          status: 403,
          statusText: "Don't have form data...!",
        }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Astro peut accéder aux variables d'environnement via process.env en SSR ou import.meta.env en dev
    const email = import.meta.env.MAIL_USER ?? process.env.MAIL_USER;
    const pass = import.meta.env.MAIL_PWD ?? process.env.MAIL_PWD;
    const host = import.meta.env.MAIL_HOST ?? process.env.MAIL_HOST;
    const port = import.meta.env.MAIL_PORT ?? process.env.MAIL_PORT;

    // Récupérer les données du formulaire
    const formData = await request.formData();
    const firstName = formData.get("hs-firstname-contacts")?.toString() || "";
    const lastName = formData.get("hs-lastname-contacts")?.toString() || "";
    const contactEmail = formData.get("hs-email-contacts")?.toString() || "";
    const phone = formData.get("hs-phone-number")?.toString() || "";
    const message = formData.get("hs-about-contacts")?.toString() || "";

    // Vérification du honeypot et comme c'est probablement un bot, on retourne un succès pour ne pas alerter le bot
    if (formData.get("emai")) {
      return new Response(
        JSON.stringify({
          status: 200,
          statusText:
            "Merci pour votre message, vous aurez une réponse dans les 48 heures.",
        })
      );
    }

    // Vérifier si les variables d'environnement sont définies
    if (!email || !pass || !host || !port) {
      console.error(
        "Variables d'environnement manquantes pour l'envoi d'email"
      );
      return new Response(
        JSON.stringify({
          status: 405,
          statusText: "One or more required environment variables are not set.",
        })
      );
    }

    const transporter = nodemailer.createTransport({
      host: host,
      port: parseInt(port),
      secure: true,
      auth: {
        user: email,
        pass,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: "contact@dix31.com",
      to: "contact@dix31.com",
      bcc: "x.genolhac@gmail.com",
      subject: `📧 ${firstName} ${lastName} m'a écrit`,
      text: `${message}.\n Adresse mail ${contactEmail} pour répondre.\n Téléphone: ${phone}`,
      html: mailContact(firstName, lastName, message, contactEmail, phone),
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        status: 200,
        statusText:
          "Merci pour votre message, vous aurez une réponse dans les 48 heures.",
      })
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);

    return new Response(
      JSON.stringify({
        status: 500,
        statusText: "Une erreur s'est produite lors de l'envoi de l'email",
      })
    );
  }
};
