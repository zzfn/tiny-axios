import esbuild from 'esbuild'
esbuild.buildSync({
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    format : 'iife' ,
    globalName : 'axios' ,
    outfile: 'dist/index.js',
})
