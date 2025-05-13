import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr1n5y2esduy2fr3wtf3rmg0f246mzp276mfzyyw7x9ps2jnzju7duq8sapqc",
            cw721: "andr1kvkcwezh5s9ghejf8wsm2yz9c670c835u5cjrd58tdfj5lp06c3qwqe83p",
            name: "DontPanic",
            type: ICollectionType.AUCTION,
            id: "auction",
            featured: "ANDR1"
        },
    ],
};

export default CONFIG;
