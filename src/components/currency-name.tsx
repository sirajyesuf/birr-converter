import currencyCountry from '@/countries.json'

function CurrencyName({currency}){

    function getCountryFlag(currency_code:string){
        
        return currencyCountry[currency_code as keyof typeof currencyCountry]
    }

	return (
		<span className='flex space-x-2'>
			{<span>{getCountryFlag(currency.code)}</span>}
			<span>{currency.code}</span>
		</span>
	)
}

export default CurrencyName
