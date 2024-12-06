import { useEffect, useState } from "react"

const FinanceCalculator = ()=>{

    let [data,setData] = useState({amount:undefined,downPayment:undefined,loanTerms:undefined,interestRate:undefined})
    let [monthlyPayment, setMonthlyPayment] = useState(null);

    useEffect(()=>{
        console.log(monthlyPayment)
    },[monthlyPayment])

    function calculateFinance() {
        const { amount, downPayment, loanTerms, interestRate } = data;

        // Validation
        if (!amount || !downPayment || !loanTerms || !interestRate) {
            alert("Please fill in all the fields!");
            return;
        }

        const loanAmount = amount - downPayment; // Calculate loan principal
        const monthlyRate = interestRate / 100 / 12; // Convert annual rate to monthly decimal
        const totalMonths = loanTerms; // Loan term in months

        if (monthlyRate === 0) {
            // If interest rate is 0, simply divide principal by months
            setMonthlyPayment((loanAmount / totalMonths).toFixed(2));
        } else {
            // Apply the loan formula
            const monthlyPayment =
                (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
                (Math.pow(1 + monthlyRate, totalMonths) - 1);

            setMonthlyPayment(monthlyPayment.toFixed(2)); // Round to 2 decimal places
        }
    }
    

    function oncalculateClick(){
        calculateFinance()
    }
    return <div className=" p-10 mt-2 rounded-lg shadow-xl border">
        <h1 className="text-2xl font-bold mb-5">Finance Calculator</h1>
        <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
                <label htmlFor="">Price$</label>
        <input type="number" value={data.amount} onChange={(e:any)=>setData((prev)=>({...prev,amount:e.target.value}))} className="border border-neutral-500 rounded p-1" />
        </div>
        <div className=" flex flex-col">
        <label htmlFor="">Down Payment</label>
        <input type="number" value={data.downPayment} onChange={(e:any)=>setData((prev)=>({...prev,downPayment:e.target.value}))} className="border border-neutral-500 rounded p-1" />
        </div>
        <div className=" flex flex-col">
        <label htmlFor="">Interest Rate</label>
        <input type="number" value={data.interestRate} onChange={(e:any)=>setData((prev)=>({...prev,interestRate : e.target.value}))} className="border border-neutral-500 rounded p-1" />
        </div>
        <div className=" flex flex-col">
        <label htmlFor="">Loan Term (Months)</label>
        <input type="number" value={data.loanTerms} onChange={(e:any)=>setData((prev)=>({...prev,loanTerms:e.target.value}))} className="border border-neutral-500 rounded p-1" />
        </div>
        </div>
        {monthlyPayment && <span>Your Montly Payment is <b>{monthlyPayment}</b></span>}
        <div className="mt-4">
        <button onClick={oncalculateClick} className="bg-blue-600 text-white w-full py-1 rounded">Calculate</button>
        </div>
    </div>
}

export default FinanceCalculator