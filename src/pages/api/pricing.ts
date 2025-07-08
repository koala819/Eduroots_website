import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

function mailPricing(firstName: string, lastName: string, email: string, phone: string, memberCount: number, isYearly: boolean, totalPrice: number, pricePerMember: number) {
  const period = isYearly ? "annuel" : "mensuel";
  const periodText = isYearly ? "an" : "mois";

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">💰 Nouvelle demande de tarification Eduroots</h2>

      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #007bff; margin-top: 0;">Informations du contact</h3>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
      </div>

      <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #28a745; margin-top: 0;">📊 Tarification calculée</h3>
        <p><strong>Nombre de membres:</strong> ${memberCount}</p>
        <p><strong>Période:</strong> ${period}</p>
        <p><strong>Prix total:</strong> ${totalPrice.toFixed(2)}€/${periodText}</p>
        <p><strong>Prix par membre:</strong> ${pricePerMember.toFixed(2)}€/membre/${periodText}</p>
      </div>

      <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p><strong>�� Prochaine étape:</strong> Contacter ce prospect pour finaliser la commande.</p>
      </div>

      <p style="color: #666; font-size: 12px;">Cette demande a été générée depuis le calculateur de tarification d'Eduroots.</p>
    </div>
  `;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!request) {
      return new Response(
        JSON.stringify({
          status: 403,
          statusText: "Données de formulaire manquantes",
        }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Variables d'environnement
    const email = import.meta.env.MAIL_USER ?? process.env.MAIL_USER;
    const pass = import.meta.env.MAIL_PWD ?? process.env.MAIL_PWD;
    const host = import.meta.env.MAIL_HOST ?? process.env.MAIL_HOST;
    const port = import.meta.env.MAIL_PORT ?? process.env.MAIL_PORT;

    // Récupérer les données du formulaire
    const formData = await request.formData();
    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const contactEmail = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const memberCount = parseInt(formData.get("memberCount")?.toString() || "0");
    const isYearly = formData.get("isYearly")?.toString() === "true";
    const totalPrice = parseFloat(formData.get("totalPrice")?.toString() || "0");
    const pricePerMember = parseFloat(formData.get("pricePerMember")?.toString() || "0");

    // Vérification du honeypot
    if (formData.get("emai")) {
      return new Response(
        JSON.stringify({
          status: 200,
          statusText: "Merci pour votre demande, nous vous recontacterons rapidement.",
        })
      );
    }

    // Validation des données
    if (!firstName || !lastName || !contactEmail || memberCount === 0) {
      return new Response(
        JSON.stringify({
          status: 400,
          statusText: "Veuillez remplir tous les champs obligatoires.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Vérifier si les variables d'environnement sont définies
    if (!email || !pass || !host || !port) {
      console.error("Variables d'environnement manquantes pour l'envoi d'email");
      return new Response(
        JSON.stringify({
          status: 405,
          statusText: "Configuration email manquante.",
        }),
        {
          status: 405,
          headers: { "Content-Type": "application/json" },
        }
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

    const period = isYearly ? "annuel" : "mensuel";
    const mailOptions = {
      from: "contact@dix31.com",
      to: "contact@dix31.com",
      bcc: "x.genolhac@gmail.com",
      subject: `💰 Tarification Eduroots - ${firstName} ${lastName} (${memberCount} membres)`,
      text: `Demande de tarification pour ${memberCount} membres - ${totalPrice.toFixed(2)}€/${period}`,
      html: mailPricing(firstName, lastName, contactEmail, phone, memberCount, isYearly, totalPrice, pricePerMember),
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        status: 200,
        statusText: "Merci pour votre demande, nous vous recontacterons rapidement.",
      })
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);

    return new Response(
      JSON.stringify({
        status: 500,
        statusText: "Une erreur s'est produite lors de l'envoi de la demande.",
      })
    );
  }
};
