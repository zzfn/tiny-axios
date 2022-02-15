import esbuild from 'esbuild'

esbuild.serve({
    servedir: 'example',
}, {
    format : 'iife' ,
    globalName : 'axios' ,
    entryPoints: ['src/index.js'],
    bundle: true,
    outdir: 'example/js',
}).then(server => {
    // server.stop()
})
