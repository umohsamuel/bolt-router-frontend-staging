interface CrossSwapInputProps {
  swapAction: "from" | "to";
}

export default function CrossSwapInput({ swapAction }: CrossSwapInputProps) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div>
        <p className="flex items-center gap-2">
          <span className="capitalize">{swapAction}</span>
          <span>--</span>
        </p>
      </div>
      <div className="h-16 w-full rounded-xl bg-[#192134] text-sm font-normal text-[#9B9B9B]">
        <input
          type="text"
          className="h-full w-full rounded-xl border-none bg-transparent text-center font-mono outline-none"
          placeholder="0.00"
        />
      </div>
      <p className="flex items-center gap-2 text-xs font-normal text-[#EEEFFB]">
        Balance: 0.00{" "}
        <button className="font-bold uppercase text-[#3D6EFF]">max</button>
      </p>
    </div>
  );
}
