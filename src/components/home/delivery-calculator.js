import React from 'react';

export const DeliveryCalculator = () => {
    return (
        <div className='my-20 container mx-auto flex items-center justify-center'>
            <div style={{ width: "50%" }} className="mt-10">
                <p className='text-3xl font-bold text-center my-5' >ডেলিভারি ক্যালকুলেটর</p>
                <p className='text-lg text-center' >আপনার শিপমেন্টের সুবিধার জন্য আগে থেকেই আপনার ডেলিভারী চার্জ সম্পর্কে ধারণা নিন</p>
                <div class="grid grid-cols-6 gap-6 mt-10">
                    <div class="col-span-6 sm:col-span-3">
                        <label for="wight" class="block text-sm font-medium text-gray-700">পণ্যের ওজন ( সর্বোচ্চ 10 কেজি )</label>
                        <input type="text" name="wight" id="first-name" autocomplete="given-name" class=" border-gray-500 border p-3 mt-1   focus:border-green-500 block w-full shadow-sm sm:text-sm focus:border rounded-md" placeholder='পণ্যের ওজন লিখুন ' />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="wight" class="block text-sm font-medium text-gray-700">পণ্যের বিক্রয়মূল্য</label>
                        <input type="text" name="wight" id="first-name" autocomplete="given-name" class=" border-gray-500 border p-3 mt-1   focus:border-green-500 block w-full shadow-sm sm:text-sm focus:border rounded-md" placeholder='পণ্যের ওজন লিখুন ' />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="wight" class="block text-sm font-medium text-gray-700">পিক-আপ এলাকা</label>
                        <input type="text" name="wight" id="first-name" autocomplete="given-name" class=" border-gray-500 border p-3 mt-1   focus:border-green-500 block w-full shadow-sm sm:text-sm focus:border rounded-md" placeholder='পণ্যের ওজন লিখুন ' />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="wight" class="block text-sm font-medium text-gray-700">ডেলিভারি এলাকা</label>
                        <input type="text" name="wight" id="first-name" autocomplete="given-name" class=" border-gray-500 border p-3 mt-1   focus:border-green-500 block w-full shadow-sm sm:text-sm focus:border rounded-md" placeholder='পণ্যের ওজন লিখুন ' />
                    </div>
                </div>
                <div className="text-center">
                    <button className='bg-green-500 text-white w-72 py-3 font-bold my-4 rounded mt-10' >ডেলিভারি চার্জ দেখুন</button>
                </div>
                <p className='text-center' >আপনি কি জানতে চান, যেকোনো লোকেশনে আপনার পার্সেল পাঠাতে কত খরচ হতে পারে?
                    আমাদের বিস্তারিত</p>
            </div>

        </div>
    );
};
