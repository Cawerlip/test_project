import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions) :webpack.RuleSetRule[] {

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
  
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',  
    exclude: /node_modules/,
  }

  const cssLoader = 
    {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader:  "css-loader",
          options: {
            modules: {
              auto: (fileName: string) => Boolean(fileName.includes(".module.")),
              localIdentName: isDev 
                ? "[local]" 
                : "[hash:base64:5]",
            },
          }
        },
        "sass-loader",
      ],
    }


  return [ 
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader
  ]
}