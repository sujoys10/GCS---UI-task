(function(){
    const orderDetails = {};
    let bill = [{
        name: 'lawn mow',
        value: 0
    }];

    (function saveOrder(){
        const save = document.querySelector('#saveOrder');
        const orderForm = document.querySelector('#orderForm');

        /* save.addEventListener('click', () => {
            //add bill in order details
            orderDetails['bill'] = bill;

            console.log(orderDetails)
            toast('order saved (open console)')
        })
 */
        const submitOrder = (e) => {
            e.preventDefault();
            orderDetails['bill'] = bill;

            console.log(orderDetails)
            toast('order saved (open console)')
        }

        orderForm.addEventListener('submit', submitOrder)
    })();

    (function mow(){
    
        //variables
        const order = {
            cost: 0
        }
    
        const start_date = document.querySelector('#start_date');
        const next_date = document.querySelector('#next_date');
        const end_date = document.querySelector('#end_date');
        const recurring_interval = document.querySelector('#recurring_interval');
        const isPaused = document.querySelector('#isPaused');
        const grass_length = document.querySelector('#grass_length');
    
    
        //methods
        const mowBill = (e) => {
            const amount = e.target.value * 110;
            order.cost = amount.toFixed(2); 
            
            //add to bill
            bill[0].value = amount;

            //set total
            document.querySelector('#mow-amount').innerText = amount.toFixed(2);

            //render order summary
            getOrderSummary(bill);

        }

        const handleStartDateChange = (e) => {
            if((end_date.value && next_date.value) && (e.target.value > end_date.value && e.target.value > end_date.value)){
                e.target.value = '';
                toast(`${e.target.id} must be less than next and end date`);
            }else{
                addDetails(e);
            }
        }
        const handleFutureDateChange = (e) => {
            if(e.target.value < start_date.value){
                e.target.value = '';
                toast(`${e.target.id} must be greater than start date`);
            }else{
                addDetails(e);
            }
        }

        const handleIsPaused = (e) => {
            orderDetails[e.target.id] = e.target.checked;
        }
        
        const addDetails = (e) => {
            orderDetails[e.target.id] = e.target.value;
        }
    
        //event listener
        grass_length.addEventListener('change', mowBill)
        start_date.addEventListener('change', handleStartDateChange)
        next_date.addEventListener('change', handleFutureDateChange)
        end_date.addEventListener('change', handleFutureDateChange)
        recurring_interval.addEventListener('change', addDetails)
        isPaused.addEventListener('change', handleIsPaused)
    })();


    (function addOns(){
        let addOn = 0;
        //variables
        const flowerBCU = document.querySelector('#flowerBCU');
        const edging = document.querySelector('#edging');
        const cleanUC = document.querySelector('#cleanUC');
    
        //methods
        const handleAddOn = (e) => {
            //check if grass length is selected
            if(bill[0].value === 0){
              //  alert('select grass length first');
                toast('select grass length first');
                e.target.checked = false;
            }else{
                if(e.target.id === 'flowerBCU'){
                    if(e.target.checked){
                        addOn += 100;
                        bill.push({
                            name: "flower bed clean up",
                            value: 100
                        })
                    }else{
                        addOn -= 100;
                        bill = bill.filter(item => item.name !== "flower bed clean up")
                    }
                }else if(e.target.id === 'edging'){
                    if(e.target.checked){
                        addOn += 120;
                        bill.push({
                            name: "edging",
                            value: 120
                        })
                    }else{
                        addOn -= 120;
                        bill = bill.filter(item => item.name !== "edging")
                    }
                }else{
                    if(e.target.checked){
                        addOn += 80;
                        bill.push({
                            name: "clean up clippings",
                            value: 80
                        })
                    }else{
                        addOn -= 80;
                        bill = bill.filter(item => item.name !== "clean up clippings")
                    }
                } 
                
                //set add on
                document.querySelector('#addOn-amount').innerText = addOn.toFixed(2);

                getOrderSummary(bill);
            }
            
        }
    
        //event listener
        flowerBCU.addEventListener('change', handleAddOn);
        edging.addEventListener('change', handleAddOn);
        cleanUC.addEventListener('change', handleAddOn);
    
    })();


   (function notes(){
        const noteForm = document.querySelector('#noteForm')
        const noteBox = document.querySelector('.notes__textbox');
        let notes = '';

        //methods
        const handleNoteChange = (e) => {
            notes = e.target.value;
        }

        const saveNote = (e) => {
            e.preventDefault();
            if(!!notes){
            orderDetails['notes'] = notes.trim();
            console.log({orderDetails});
            toast('note added'); 
            }else{
                toast('add note first'); 
            }
        }

        //event listener
        noteForm.addEventListener('submit', saveNote)
        noteBox.addEventListener('change', handleNoteChange)
    })();
})();



