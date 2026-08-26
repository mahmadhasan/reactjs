import { useState } from "react"

export function EmiCalculator(){
     const[loanAmount,setLoanAmount] = useState(25000);
     const[year,setYear] = useState(1);
     const[rate,setRate] = useState(10.45);
     const[emi,setEmi] = useState(0);

     function handleAmount(e){
    setLoanAmount(e.target.value);
    EmiCalculator();
    
    function EmiCalculator(){
        var  P = parseInt(loanAmount);
            var R = parseFloat(rate)/12/100;
            var N = parseInt(year)*12;
            var emi = P * R * (Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
            setEmi(emi);
    }

        }

         function handleYearChange(e){
        setYear(e.target.value);
        EmiCalculator();

        }

         function handleRate(e){
            setRate(e.target.value);
            EmiCalculator();

        }
        function handleCalculateClick(){
            var  P = parseInt(loanAmount);
            var R = parseFloat(rate)/12/100;
            var N = parseInt(year)*12;
            var emi = P * R * (Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
            setEmi(emi);

        }

    return(
        <div className="container-fluid" style={{height:'100vh'}}>
            <div className="row mt-4">
                <div className="col-6">
                    <div className="row">
                        <div className="d-flex justify-content-between">
                        <div><label className="form-label fw-bold">Loan Amount</label></div>
                        <div><input type="text" onChange={handleAmount} value={loanAmount} className="form-control"/></div>    
                    </div>
                    <div>
                        <input type="range" onChange={handleAmount} min='25000' value={loanAmount} step="10000" max='2500000' className="form-range"/>
                        <div>
                            <span>&#8377; 25,000/-</span>
                            <span className="float-end">&#8377; 10,00,000</span>
                        </div>
                    </div>
                    </div>

                    <div className="row my-3">
                        <div className="d-flex justify-content-between">
                            <div><label className="form-label fw-bold">Loan Tenure</label></div>
                            <div><input  onChange={handleYearChange} style={{width:'50px'}} value={year} type="text" min='1' max='7' className="form-range"/></div>
                        </div>

                        <div>
                           <div>
                            <input type="range" onChange={handleYearChange} min='1' max='7' value={year} className="form-range" />
                        </div>
                        <div className="row my-3">
                            <div className="d-flex justify-content-between">
                                <div><label className="form-label fw-bold">Interest</label></div>
                                <div><input type="text" onChange={handleRate} value={rate} style={{width:'50px'}} /></div>
                            </div>
                            <div>
                                <input type="range"  onChange={handleRate} value={rate} min='10.4' max='18.4' />
                            </div>
                            <div>
                                <span>10.45%</span>
                                <span className="float-end">18.45%</span>
                            </div>
                            </div>
                            </div>
                        <div className="text-center">
                            <button onChange={handleCalculateClick} className="btn btn-primary">Calculate</button>
                        </div>

                        </div>

                <div className="col-4 ps-4">
                 <h3>Loan Installment Amount</h3>
                 <div className="h1">
                    {emi.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0})}
                 </div>
                </div>

            </div>

        </div>
        
        </div>
    )
}