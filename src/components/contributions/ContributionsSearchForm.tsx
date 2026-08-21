
type ContributionSearchFormProps={
    initialQuery?: string
    state?: string
    language?: string
    label?:string
    repo?:string,
    created?: string,
    updated?: string,
   
}
export function ContributionSearchForm({
    initialQuery = "",
    state = "open" ,
    language = "all",
    label="all",
    repo = "",
    created = "all",
    updated = "all",
    
}: ContributionSearchFormProps ) {
    return (
        <form
      action="/contributions"
      method="GET"
      className="space-y-4"
    >
      <div>
        <label
          htmlFor="q"
          className="block text-sm font-medium text-gray-700"
        >
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
         <div>
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          State:
        </label>

        <select
          id="state"
          name="state"
          defaultValue={state}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
        >
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <div>
            <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700"
            >
                Language:
            </label>

            <select
                id="language"
                name="language"
                defaultValue={language}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            >
                <option value="all">All</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="csharp">C#</option>
                <option value="php">PHP</option>
                <option value="ruby">Ruby</option>
                <option value="go">Go</option>
                <option value="rust">Rust</option>
            </select>
        </div>
        <div>
            <label
                htmlFor="label"
                className="block text-sm font-medium text-gray-700"
            >
                Label:
            </label>

            <select
                id="label"
                name="label"
                defaultValue={label}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            >
                <option value="all">All</option>
                <option value="good first issue">Good first issue</option>
                <option value="help wanted">Help wanted</option>
                <option value="documentation">Documentation</option>
                <option value="bug">Bug</option>
                <option value="enhancement">Enhancement</option>
            </select>
        </div>
        <div>
        <label
            htmlFor="repo"
            className="block text-sm font-medium text-gray-700"
        >
            Repository:
        </label>

        <input
            type="text"
            id="repo"
            name="repo"
            placeholder="owner/repository (e.g. facebook/react)"
            defaultValue={repo}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
        />
    </div>
    <div>
        <label
          htmlFor="created"
          className="block text-sm font-medium text-gray-700"
        >
          Created:
        </label>

        <select
          id="created"
          name="created"
          defaultValue={created}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="updated"
          className="block text-sm font-medium text-gray-700"
        >
          Updated:
        </label>

        <select
          id="updated"
          name="updated"
          defaultValue={updated}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
      >
        Search
      </button>
    </form>
    );
}