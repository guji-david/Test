import babel from 'rollup-plugin-babel'
export  default {
    input:'src/vcode/node.js',
    output:{
        file:'dist/vcode/node.js',
        format:'cjs'
    },
    banner:'/*fed123.com*/',
    plugin:[
        babel({
            "presets":[[
                "env",{
                    "modules":false
                }
            ]],
            "plugins":[[
                "transform-react-jsx",{
                    "pragma":"vnode"
                }
            ]]

        })
    ]
}