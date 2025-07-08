import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 70, effort: 6 })
      .resize(1200, null, { withoutEnlargement: true })
      .toFile(outputPath);

    const stats = await fs.stat(outputPath);
    console.log(`${path.basename(inputPath)}: ${(stats.size / 1024).toFixed(1)}kio`);
  } catch (error) {
    console.error(`Erreur avec ${inputPath}:`, error);
  }
}

// Optimiser toutes les images
const imagesDir = './src/images';
const files = await fs.readdir(imagesDir);

for (const file of files) {
  if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    await optimizeImage(inputPath, outputPath);
  }
}
