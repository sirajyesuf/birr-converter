import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { useIsCountryDrawerOpen,useCurrency } from "@/store.ts";
import CountryName from "../currency-name";
import { useQuery } from "@tanstack/react-query";
import { CurrencyRate } from "@/components/converter/currency-type";
import CurrencyName from "../currency-name";
import { CheckIcon } from 'lucide-react'

export default function CountryDrawer() {

  const { currency, setCurrency } = useCurrency();
  const { isOpen, setIsOpen } = useIsCountryDrawerOpen();
  const [currencies, setCurrencies] = useState(Array<CurrencyRate>);
  const [searchquery, setSearchQuery] = useState("");

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["currencies"],
    queryFn: async () => {
      const res = await fetch("https://www.floatrates.com/daily/etb.json").then(
        (res) => res.json()
      );

      const rates: Array<CurrencyRate> = Object.values(res);
      setCurrencies(rates);
      return rates;
    },
  });

  const filteredCurrencies = currencies.filter((currency) =>
    currency.name.toLowerCase().includes(searchquery.toLowerCase()) ||
    currency.code.toLowerCase().includes(searchquery.toLowerCase())
  );

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
      >
        <Button onClick={() => setIsOpen(true)}>
          <CountryName currency={currency} />
        </Button>
        <DialogContent className="sm:h-auto h-[100svh] sm:w-auto w-full">
          <div className="mx-auto w-[95%] max-w-sm p-2">
            <DialogHeader>
              <DialogTitle>Convert to Currency</DialogTitle>
              <DialogDescription>
                Select Currency to compare to Ethiopian Birr price
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col space-y-4 py-4">
              <input
                className="text-md border p-2 rounded-md"
                placeholder="Search for currency ..."
                value={searchquery}
                type="text"
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchQuery(value);
                }}
              />

              <ul className="w-[100%]">
                <ScrollArea className="sm:h-96 h-[77shv] w-[100%] rounded-md border">


                            {filteredCurrencies.map((c, idx) => (
									<li key={idx} className='w-[100%]'>
										<Button
											onClick={() => {
                                                setCurrency(c);
                                                setSearchQuery("");
                                                setIsOpen(false);
                                            }}
											size='lg'
											variant='ghost'
											className='rounded-none w-[100%] flex items-center text-left justify-between px-4'
										>
											<CurrencyName currency={c} />
											{c === currency && <CheckIcon />}
										</Button>

										{idx < filteredCurrencies.length - 1 && <Separator />}
									</li>
								))}

                </ScrollArea>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
