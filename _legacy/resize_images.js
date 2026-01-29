const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'media/imagenes';
const outputDir = 'media/imagenes/optimized';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = {
    small: 300,
    medium: 600,
    large: 1200,
    xlarge: 2000
};

const densities = [1, 2];

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error scanning directory:', err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(inputDir, file);
        const ext = path.extname(file).toLowerCase();
        
        // Skip directory and non-image files
        if (fs.lstatSync(filePath).isDirectory() || !['.png', '.jpg', '.jpeg'].includes(ext)) return;

        const filename = path.basename(file, ext);

        // Process each size
        for (const [sizeName, width] of Object.entries(sizes)) {
            // Process each density
            densities.forEach(density => {
                const effectiveWidth = width * density;
                const outputFilename = `${filename}-${sizeName}-${density}x.webp`;
                const outputPath = path.join(outputDir, outputFilename);

                sharp(filePath)
                    .resize(effectiveWidth)
                    .webp({ quality: 80 })
                    .toFile(outputPath)
                    .then(info => {
                        console.log(`Generated: ${outputFilename}`);
                    })
                    .catch(err => {
                        console.error(`Error processing ${file}:`, err);
                    });
            });
        }
    });
});
