function blogDetail(props){
    return (
        <div className="max-w-full flex justify-evenly flex-wrap">
            <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 max-w-full">
                <dt className="sr-only">Authors</dt>
                <dd>
                    <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                        <li className="flex items-center space-x-2">
                            <img src="https://picsum.photos/10/10" alt="" className="w-10 h-10 rounded-full" />
                            <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                                <dt className="sr-only">Name</dt>
                                <dd className="text-gray-900">{props.blogVar.author}</dd>
                                <dt className="sr-only">Twitter</dt>
                                <dd>
                                    <a href="javascript:void(0)" className="text-teal-500 hover:text-teal-600">@test</a>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </dd>
            </dl>
            <div className="max-w-screen-md rounded overflow-hidden shadow-lg float-right">
                <img className="w-full" src={props.blogVar.image} alt={props.blogVar.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.blogVar.title}</div>
                    <p className="text-gray-700 text-base">
                        {props.blogVar.content}
                    </p>
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
            </div>
        </div>
    )
}

export default blogDetail