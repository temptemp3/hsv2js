const netTokSchema = {
  name: "NetTok",
  desc: "Network-Token Liquidity Pool",
  methods: [
    {
      name: "Info",
      args: [],
      returns: {
        type: "(uint64,(uint64,uint64),(uint64,uint64),(uint64,uint64,uint64,address,byte),(uint64,uint64),uint64,(byte,byte[8]))",
      },
      readonly: true,
    },
    { name: "Protocol_delete", args: [], returns: { type: "byte[0]" } },
    {
      name: "Protocol_harvest",
      args: [
        { type: "address" },
        { type: "(uint64,uint64,uint64,address,byte)" },
      ],
      returns: { type: "((uint64,uint64),uint64)" },
    },
    {
      name: "Provider_deposit",
      args: [{ type: "(uint64,uint64)", name: "inBals" }],
      returns: { type: "uint64", name: "outLpt" },
    },
    {
      name: "Provider_withdraw",
      args: [{ type: "uint64" }],
      returns: { type: "(uint64,uint64)" },
    },
    {
      name: "Trader_swapAForB",
      args: [{ type: "uint64" }, { type: "uint64" }],
      returns: { type: "(uint64,uint64)" },
    },
    {
      name: "Trader_swapBForA",
      args: [{ type: "uint64" }, { type: "uint64" }],
      returns: { type: "(uint64,uint64)" },
    },
  ],
  events: [],
};
export default netTokSchema;
