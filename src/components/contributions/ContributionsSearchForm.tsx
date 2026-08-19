
export function ContributionSearchForm({

    initialQuery = ""
}: { 
    initialQuery?: string 
}) {
    return (
        <form action="/contributions" method="GET" className="space-y-4">
            <div>
                <label htmlFor="q" className="block text-sm font-medium text-gray-700">
                    Search Contributions:
                </label>
                <input
                    type="text"
                    id="q"
                    name="q"
                    defaultValue={initialQuery}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Search
            </button>
        </form>
    );
}