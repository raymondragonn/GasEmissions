import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs-extra';
import path from 'path';


async function copyDependencies() {
  const packageJson = await fs.readJson('./package.json');
  const dependencies = Object.keys(packageJson.dependencies);

  await Promise.all(
    dependencies.map(async (dependency) => {
      const dependencyPath = path.join('./node_modules', dependency);
      const distPath = path.join(dependencyPath, 'dist');
      const libPath = path.join('./static/assets/libs', dependency);

      if (await fs.pathExists(distPath)) {
        await fs.copy(distPath, libPath);
      } else {
        await fs.copy(dependencyPath, libPath);
      }
    })
  );
}

esbuild
    .build({
        logLevel: 'debug',
        metafile: true,
        entryPoints: ['./static/assets/scss/styles.scss', './static/assets/scss/icons.scss'],
        outdir: './static/assets/css',
        bundle: true,
        plugins: [
            sassPlugin({
                async transform(source) {
                    const { css } = await postcss([autoprefixer]).process(source, { from: undefined });
                    return css;
                },
            }),
        ],
        loader: {
            ".png": "file",
            ".jpg": "file",
            ".jpeg": "file",
            ".svg": "file",
            ".gif": "file",
            ".woff": "file",
            ".ttf": "file",
            ".eot": "file",
            ".woff2": "file"
          }
    })
    .then(async () => {
        console.log('⚡ Styles & Scripts Compiled! ⚡ ');
        await copyDependencies().then(()=>{
            console.log('⚡ libs Compiled! ⚡ ');
        });
    })
    .catch(() => process.exit(1));
   