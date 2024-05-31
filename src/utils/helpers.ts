import BigNumber from "bignumber.js";

export function fromTokenAmount(
  amount: BigNumber | number | string,
  decimals: number
): BigNumber {
  return new BigNumber(amount).times(
    new BigNumber(10).exponentiatedBy(decimals)
  );
}
