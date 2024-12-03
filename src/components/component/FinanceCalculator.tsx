const FinanceCalculator = ()=>{
    return <div className=" p-10 mt-2 rounded-lg shadow-xl border">
        <h1 className="text-2xl font-bold mb-5">Finance Calculator</h1>
        <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
                <label htmlFor="">Price$</label>
        <input type="text" className="border border-neutral-500 rounded p-1" />
        </div>
        <div className=" flex flex-col">
        <label htmlFor="">Down Payment</label>
        <input type="text" className="border border-neutral-500 rounded p-1" />
        </div>
        <div className=" flex flex-col">
        <label htmlFor="">Interest Rate</label>
        <input type="text" className="border border-neutral-500 rounded p-1" />
        </div>
        <div className=" flex flex-col">
        <label htmlFor="">Loan Term (Months)</label>
        <input type="text" className="border border-neutral-500 rounded p-1" />
        </div>
        </div>
        <div className="mt-4">
        <button className="bg-blue-600 text-white w-full py-1 rounded">Calculate</button>
        </div>
    </div>
}

export default FinanceCalculator