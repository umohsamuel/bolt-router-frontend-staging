// import { cookieStorage, createStorage } from "wagmi"
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, base, scroll, polygon, sepolia } from '@reown/appkit/networks'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, arbitrum, base, scroll, polygon, sepolia]

export const wagmiAdapter = new WagmiAdapter({
  // storage: createStorage({
  //   storage: cookieStorage
  // }),
  ssr: false,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig