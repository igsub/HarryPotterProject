interface ISearchBarProps {
  searchText: string;
  setSearchText: any;
}

const SearchBar = ({ searchText, setSearchText }: ISearchBarProps) => {
  
  return  (
    <div className="input-group relative flex flex-nowrap items-stretch sm:w-full xl:w-1/2 mb-4">
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-white bg-background-normal bg-clip-padding border border-solid border-background-light rounded transition ease-in-out m-0 focus:text-white focus:bg-background-light focus:border-background-dark focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
      <button className="btn px-6 py-2.5 bg-background-dark text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background-light hover:shadow-lg focus:bg-background-light  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-background-light active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>)

}

export default  SearchBar