const NewsLetterSection = () => {

    const submitForm = () => {
        //Fields definitions
        let input = (document.getElementById("subscribeInput") as HTMLInputElement).value;
        if(input.length > 5 && input.includes("@")){
            console.log("Valid")
        } else {
            console.log("Invalid")
        }
    }

    return(
        <div className="text-white bg-[#111827] flex flex-col justify-between gap-5 items-center text-center px-4 py-15 md:py-20 lg:py-25 mx-5 md:mx-15 rounded-lg xl:py-30 lg:gap-10 my-10 lg:my-20">
            <div className="flex flex-col lg:gap-2 xl:gap-5">
                <h1 className="text-2xl font-bold lg:text-3xl xl:text-4xl 2xl:text-5xl">Join Our Newsletter</h1>
                <p className="font-normal lg:text-lg xl:text-xl 2xl:text-2xl">Subscribe to get special offers, free giveaways, and exclusive deals.</p>
            </div>
            <div className="subscribeInput flex flex-row justify-between align-center border rounded-full bg-white md:w-[450px] xl:w-[600px]">
                <input id="subscribeInput" type="text" className="focus:outline-none py-2 pl-4 text-black w-full lg:text-lg xl:text-xl 2xl:text-2xl xl:px-4 xl:py-3"/>
                <button className="font-medium px-3 border-black border-l text-black hover:cursor-pointer hover:bg-gray-200 rounded-r-full md:text-lg" onClick={submitForm}>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetterSection