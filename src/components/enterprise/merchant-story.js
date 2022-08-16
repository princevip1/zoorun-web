import React from 'react';

export const MerchantStory = () => {
    return (
        <div className='bg-gray-100 mt-20'>
            <div className="container mx-auto">
                <div class="flex justify-center items-center justify-center flex-wrap">
                    <div className='w-full sm:w-full md:w-2/5 lg:w-2/5'>
                        <img style={{
                            width: "80%",
                            verticalAlign: 'middle',
                            borderRadius: 10,
                            marginTop: -40,
                            marginBottom: 40
                        }} src={require('../../assets/image/enterprise/merchant.jpeg')} alt="" />
                    </div>
                    <div className='w-full sm:w-full md:w-2/5 lg:w-2/5'>
                        <p className='text-4xl font-bold' >মার্চেন্টদের সফলতার গল্প</p>
                        <p className='text-md font-bold my-10' >আমাদের ডিস্ট্রিবিউশনে রেডএক্স গুরুত্বপূর্ণ সহযোগী</p>
                        <p>লজিস্টিকস এবং ডিস্ট্রিবিউশন ম্যানেজমেন্টে রেডএক্স একটি অসম্ভব রকমের জনপ্রিয় নাম। বিগত কয়েকমাস ধরে রেডএক্সের সাথে আমরা কাজ করছি। এই স্বল্প সময়ের মধ্যেই র‍্যাংগস ইন্ডাস্ট্রিজ লিমিটেডের পণ্য ডিস্ট্রিবিউশন ও ডেলিভারির জন্য রেডএক্স আমাদের কাছে সবচেয়ে বিশ্বস্ত হয়ে উঠেছে। আশা করি, রেডএক্সের সাথে এই সম্পর্ক আরও দীর্ঘমেয়াদী এবং ব্যবসায়িকভাবে সফল হয়ে উঠবে।</p>

                        <div className='my-10'>
                            <p className='font-bold' >সালমান এ খান</p>
                            <p className='' >হেড অফ ব্র্যান্ড, লোকাল ইলেক্ট্রনিক্স শিল্প প্রতিষ্ঠান</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
