import React from 'react';

const BuyingModal = ({collectionComputer , setCollectionComputer}) => {
    const {name, resellPrice} =collectionComputer;
    const handleBuying = event =>{
        event.preventDefault();
        const form = event.target;
        const itemName = form.itemName.value;
        const userName = form.name.value;
        const email= form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const buyingComputer = {
            name: itemName,
            user: userName,
            email,
            phone,
            location 
        }
        console.log(buyingComputer);
    }

    return (
        <>
            <input type="checkbox" id="buying-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="buying-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBuying} className='grid grid-cols-1 gap-3 mt-10'>

                        <input type="text" name='itemName' disabled value= {name} className="input w-full input-bordered " />
                        <input type="text" name='price' disabled value= {` Price: ${resellPrice} $`} className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={'user?.displayName'} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={'user?.email'} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyingModal;