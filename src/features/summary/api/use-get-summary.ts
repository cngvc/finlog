import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { client } from "@/lib/hono";
import { convertAmountFromTimeUnits } from "@/lib/utils";

export const useGetSummary = () => {
  const params = useSearchParams();
  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const accountId = params.get("accountId") || "";

  const query = useQuery({
    queryKey: ["summary", { from, to, accountId }],
    queryFn: async () => {
      const response = await client.api.summary.$get({
        query: {
          from,
          to,
          accountId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch summary");
      }

      const { data } = await response.json();
      return {
        ...data,
        incomeAmount: convertAmountFromTimeUnits(data.incomeAmount),
        expensesAmount: convertAmountFromTimeUnits(data.expensesAmount),
        remainingAmount: convertAmountFromTimeUnits(data.remainingAmount),
        categories: data.categories.map((category) => ({
          ...category,
          value: convertAmountFromTimeUnits(category.value),
        })),
        days: data.days.map((day) => ({
          ...day,
          income: convertAmountFromTimeUnits(day.income),
          expenses: convertAmountFromTimeUnits(day.expenses),
        })),
      };
    },
  });

  return query;
};
