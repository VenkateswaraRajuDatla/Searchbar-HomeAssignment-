import React, {Component} from 'react';
import './App.css';
import Searchbar from './Searchbar';

class App extends Component{
  render(){
    var financialInst= financialInstData.products;
    financialInst = financialInst.filter((value, i) =>
    i === financialInst.findIndex((dup) => (dup.name === value.name && dup.type === value.type)))
    return(
      <div className="App">
      <h2>Searchbar for Financial Institutions</h2>
      <Searchbar data={financialInst}/>
      </div>
    );
  }
}

const financialInstData={
  "products": [
        {
            "name": "American Express Cards (US)",
            "url": "https://www.americanexpress.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Ariel Mutual Funds (US)",
            "url": "http://www.arielmutualfunds.com/home.index.htm",
            "type": "INVESTMENT"
        },
        {
            "name": "American Funds (US) - Investments",
            "url": "https://www.americanfunds.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Alliance Bernstein (US) - Investments",
            "url": "http://www.alliancebernstein.com/investments/us/Home.aspx?nid=5415",
            "type": "INVESTMENT"
        },
        {
            "name": "American Century (US) - Investments",
            "url": "http://www.americancentury.com/index.jsp",
            "type": "INVESTMENT"
        },
        {
            "name": "ADP Retirement Services - 401k (US)",
            "url": "http://www.adp.com/solutions/employer-services/retirement-services.aspx",
            "type": "INVESTMENT"
        },
        {
            "name": "American Express Bank (Personal Savings) (US) - Bank",
            "url": "https://www.americanexpress.com/?inav=NavLogo",
            "type": "BANK"
        },
        {
            "name": "American Education Services Student Loan (US)",
            "url": "http://www.aessuccess.org",
            "type": "LOAN"
        },
        {
            "name": "Provident CU (CA) (US) - Loan",
            "url": "https://accountmanager.providentcu.org",
            "type": "LOAN"
        },
        {
            "name": "Affiliated Computer Services (US) - Loan",
            "url": "https://www.acs-education.com/bac/GENL/Home.html",
            "type": "LOAN"
        },
        {
            "name": "PIMCO Funds (US) - Investments",
            "url": "http://www.allianzinvestors.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Amazon.com Visa Card (US)",
            "url": "http://www.amazon.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "AT&T Universal Card (US)",
            "url": "https://www.accountonline.com/View?docId=Index&siteId=AC&langId=EN",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Yahoo! Visa Card (US)",
            "url": "http://app1.firstusa.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Provident CU (CA) (US) - Bank",
            "url": "https://accountmanager.providentcu.org",
            "type": "BANK"
        },
        {
            "name": "A+ FCU (TX) (US) - Bank",
            "url": "https://aplusfcu.org",
            "type": "BANK"
        },
        {
            "name": "A+ FCU (TX) (US) - Loan",
            "url": "https://aplusfcu.org",
            "type": "LOAN"
        },
        {
            "name": "KeyPoint CU (ShareBuilder) (US)",
            "url": "http://aea.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Affinity Plus FCU (CUNA brokerage) (US)",
            "url": "http://affinityplus.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Alaska Airlines Employees FCU (ShareBuilder) (US)",
            "url": "http://alaskaaefcu.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Alta One FCU (ShareBuilder) (US)",
            "url": "http://altaone.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "America First CU (ShareBuilder) (US)",
            "url": "http://americafirst.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "APCO Employees CU (ShareBuilder) (US)",
            "url": "http://apcocu.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Americas Choice CU (ShareBuilder) (US)",
            "url": "http://americaschoicecu.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Arrowhead CU (ShareBuilder) (US)",
            "url": "http://arrowheadcu.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Alpena County Medical CU - Investments (US)",
            "url": "http://alpenamedical.cusite.net",
            "type": "INVESTMENT"
        },
        {
            "name": "Financial Advantage FCU - Investments (US)",
            "url": "http://www.financial-advantage-cu.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Etowah Steelworkers FCU - Investments (US)",
            "url": "http://www.escu-al.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Central Jersey Bank N.A (US) - Bank",
            "url": "http://allairebank.com",
            "type": "BANK"
        },
        {
            "name": "Central Jersey Bank N.A (US) - Loan",
            "url": "http://allairebank.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of America (US) - Bank",
            "url": "http://www.bankofamerica.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "TD Ameritrade Inc. (US) - Investments",
            "url": "https://www.tdameritrade.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Wells Fargo Advantage Funds (US) - Investments",
            "url": "http://www.wellsfargoadvantagefunds.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Fidelity Cash Management Account (US) - Bank",
            "url": "http://www.fidelity.com",
            "type": "BANK"
        },
        {
            "name": "Fidelity Cash Management Account (US)",
            "url": "http://www.fidelity.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (US) - Loan",
            "url": "http://www.bankofamerica.com",
            "type": "LOAN"
        },
        {
            "name": "Univest National Bank and Trust (US) - Bank",
            "url": "http://www.univest.net",
            "type": "BANK"
        },
        {
            "name": "Invesco (Investor Account Access) (US)",
            "url": "http://www.invesco.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (US) - Mortgage",
            "url": "http://www.bankofamerica.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Bank of America 401k (US)",
            "url": "http://www.bankofamerica.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (U.S. Trust Clients) (US) - Investments",
            "url": "https://wealthmanagement.bankofamerica.com",
            "type": "INVESTMENT"
        },
        {
            "name": "MassMutual (Individual Account Access) (US) - Investments",
            "url": "http://wwwrs.massmutual.com/retire/index.htm",
            "type": "INVESTMENT"
        },
        {
            "name": "Sam's Club Business Credit Online Account (US) - Credit Card",
            "url": "https://www.samsclubdiscover.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "My Acura (US) - Loan",
            "url": "http://owners.acura.com",
            "type": "LOAN"
        },
        {
            "name": "American Funds Retirement Solution(Capital Group) (US)",
            "url": "https://myretirement.retire.americanfunds.com/home.htm",
            "type": "INVESTMENT"
        },
        {
            "name": "Lord Abbett (US) - Investments",
            "url": "http://www.lordabbett.com/investor/#",
            "type": "INVESTMENT"
        },
        {
            "name": "Loring Ward (Advisory Services) (US)",
            "url": "http://www.loringward.com/Version2/index.html",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Citi Credit Cards (US)",
            "url": "https://online.citibank.com/US/Welcome.c",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Charles Schwab (US) - Investments",
            "url": "http://www.schwab.com",
            "type": "INVESTMENT"
        },
        {
            "name": "PNC Bank (US)",
            "url": "https://www.pnc.com/webapp/unsec/Homepage.do?siteArea=/PNCCorp/PNC/Home/Personal",
            "type": "BANK"
        },
        {
            "name": "Chase (US) - Loan",
            "url": "http://www.chase.com",
            "type": "LOAN"
        },
        {
            "name": "OppenheimerFunds (US) - Investments",
            "url": "https://www.oppenheimerfunds.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Prudential (US) - Investments",
            "url": "http://www.prudential.com/insurance",
            "type": "INVESTMENT"
        },
        {
            "name": "FIA Card Services (US)",
            "url": "https://www.ibsnetaccess.com/NASApp/NetAccess/LoginDisplay",
            "type": "CREDIT_CARD"
        },
        {
            "name": "USAA (US) - Bank",
            "url": "https://www.usaa.com",
            "type": "BANK"
        },
        {
            "name": "Hyundai Motor Finance Company (US) - Loan",
            "url": "https://www.hmfusa.com/login",
            "type": "LOAN"
        },
        {
            "name": "ING (Your Retirement Plan) (US)",
            "url": "https://www.voya.com",
            "type": "INVESTMENT"
        },
        {
            "name": "AmSouth Bank (US) - Loan",
            "url": "http://www.amsouth.com",
            "type": "LOAN"
        },
        {
            "name": "Accutrade (US) - Investments",
            "url": "https://wwws.accutrade.com",
            "type": "INVESTMENT"
        },
        {
            "name": "America's First FCU (US) - Bank",
            "url": "http://www.amfirst.org",
            "type": "BANK"
        },
        {
            "name": "APL FCU (US) - Credit Card",
            "url": "https://www.aplfcu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Arsenal CU (US) - Bank",
            "url": "http://www.arsenalcu.org",
            "type": "BANK"
        },
        {
            "name": "Arsenal CU (US) - Loan",
            "url": "http://www.arsenalcu.org",
            "type": "LOAN"
        },
        {
            "name": "ASI FCU (US) - Bank",
            "url": "http://www.asifcu.org",
            "type": "BANK"
        },
        {
            "name": "ASI FCU (US) - Loan",
            "url": "http://www.asifcu.org",
            "type": "LOAN"
        },
        {
            "name": "ASI FCU (US) - Mortgage",
            "url": "http://www.asifcu.org",
            "type": "MORTGAGE"
        },
        {
            "name": "Advantis CU (US) - Bank",
            "url": "http://www.advantiscu.org",
            "type": "BANK"
        },
        {
            "name": "Advantis CU (US) - Credit Card",
            "url": "https://www.advantiscu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Advantis CU (US) - Loan",
            "url": "http://www.advantiscu.org",
            "type": "LOAN"
        },
        {
            "name": "Allegacy FCU (US) - Bank",
            "url": "https://www.allegacyfcu.org/home/home",
            "type": "BANK"
        },
        {
            "name": "Allegacy FCU (US) - Credit Card",
            "url": "http://www.allegacyfcu.org/site/frame_set/personal.html",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Allegacy FCU (US) - Loan",
            "url": "http://www.allegacyfcu.org/site/frame_set/personal.html",
            "type": "LOAN"
        },
        {
            "name": "Allegacy FCU (US) - Mortgage",
            "url": "http://www.allegacyfcu.org/site/frame_set/personal.html",
            "type": "MORTGAGE"
        },
        {
            "name": "Altier CU (US) - Bank",
            "url": "https://www.altiercu.org/home",
            "type": "BANK"
        },
        {
            "name": "Anchor Bank (US)",
            "url": "https://www.anchornetbank.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America (US) - Bank",
            "url": "http://www.bankofamerica.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "PayPal (US) - Bank",
            "url": "https://www.paypal.com/cgi-bin/webscr?cmd=_home",
            "type": "BANK"
        },
        {
            "name": "Bank of America (US) - Loan",
            "url": "http://www.bankofamerica.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of America (US) - Mortgage",
            "url": "http://www.bankofamerica.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Bank of the West (US) - Bank",
            "url": "http://www.bankofthewest.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America 401k (US)",
            "url": "http://www.bankofamerica.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Barclaycard (US)",
            "url": "https://www.barclaycardus.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Bank of the West (TX) (US) - Bank",
            "url": "http://www.bnkwest.com",
            "type": "BANK"
        },
        {
            "name": "Affiliated Computer Services (US) - Loan",
            "url": "https://www.acs-education.com/bac/GENL/Home.html",
            "type": "LOAN"
        },
        {
            "name": "HSBC Bank (US)",
            "url": "https://www.us.hsbc.com/1/2/home/personal-banking",
            "type": "BANK"
        },
        {
            "name": "HSBC Bank (US) - Credit Card",
            "url": "https://www.us.hsbc.com/1/2/home/personal-banking",
            "type": "CREDIT_CARD"
        },
        {
            "name": "HSBC Bank (US) - Loan",
            "url": "https://www.us.hsbc.com/1/2/home/personal-banking",
            "type": "LOAN"
        },
        {
            "name": "Discover Bank (US)",
            "url": "https://www.discover.com/online-banking",
            "type": "BANK"
        },
        {
            "name": "GE Benefits 401k (US)",
            "url": "https://benefits.ge.com/cgi-bin/bene_filter.pl",
            "type": "INVESTMENT"
        },
        {
            "name": "Century Bank (MA) (US) - Bank",
            "url": "http://www.century-bank.com",
            "type": "BANK"
        },
        {
            "name": "Heartland Bank (MO) (US) - Bank",
            "url": "http://www.heartland-bank.com",
            "type": "BANK"
        },
        {
            "name": "Heartland Bank (MO) (US) - Credit Card",
            "url": "http://www.heartland-bank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Heartland Bank (MO) (US) - Loan",
            "url": "http://www.heartland-bank.com",
            "type": "LOAN"
        },
        {
            "name": "Heartland Bank (MO) (US) - Mortgage",
            "url": "http://www.heartland-bank.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Liberty Bank (CT) Personal (US) - Bank",
            "url": "http://www.liberty-bank.com",
            "type": "BANK"
        },
        {
            "name": "Liberty Bank (CT) Personal (US) - Mortgage",
            "url": "http://www.liberty-bank.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Western Bank (US)",
            "url": "http://www.western-bank.com",
            "type": "BANK"
        },
        {
            "name": "The Bank of Nashville (US) - Bank",
            "url": "https://bankofnashville.synovus.com",
            "type": "BANK"
        },
        {
            "name": "The Bank of Nashville (US) - Loan",
            "url": "https://bankofnashville.synovus.com",
            "type": "LOAN"
        },
        {
            "name": "JPMorgan Online Securities (US)",
            "url": "http://www.bearstearns.com/bear/bsportal/CorporateHome.do",
            "type": "INVESTMENT"
        },
        {
            "name": "MidAmerica Bank (US) - Loan",
            "url": "http://www.midamerica-bank.com",
            "type": "LOAN"
        },
        {
            "name": "MidAmerica Bank (US) - Mortgage",
            "url": "http://www.midamerica-bank.com",
            "type": "MORTGAGE"
        },
        {
            "name": "City National Bank (WV, KY, VA, OH) (US) - Bank",
            "url": "http://www.citynational-bank.com",
            "type": "BANK"
        },
        {
            "name": "City National Bank (WV, KY, VA, OH) (US) - Loan",
            "url": "http://www.citynational-bank.com",
            "type": "LOAN"
        },
        {
            "name": "Wells Fargo (US) - Bank",
            "url": "http://www.wellsfargo.com",
            "type": "BANK"
        },
        {
            "name": "Citi Bank (online.citibank.com) (US) - Bank",
            "url": "https://online.citibank.com/US/Welcome.c",
            "type": "BANK"
        },
        {
            "name": "E*TRADE (US) - Bank",
            "url": "https://us.etrade.com",
            "type": "BANK"
        },
        {
            "name": "Liberty First CU (US) - Bank",
            "url": "http://www.libertyfirstcu.com",
            "type": "BANK"
        },
        {
            "name": "U.S. Bank (US)",
            "url": "http://www.usbank.com",
            "type": "BANK"
        },
        {
            "name": "Fidelity Cash Management Account (US) - Bank",
            "url": "http://www.fidelity.com",
            "type": "BANK"
        },
        {
            "name": "E-LOAN (US) - Bank",
            "url": "http://www.eloan.com",
            "type": "BANK"
        },
        {
            "name": "Patelco CU (US) - Bank",
            "url": "http://www.patelco.org",
            "type": "BANK"
        },
        {
            "name": "Capital One (US) - Bank",
            "url": "http://www.capitalonebank.com",
            "type": "BANK"
        },
        {
            "name": "PNC Bank (US)",
            "url": "https://www.pnc.com/webapp/unsec/Homepage.do?siteArea=/PNCCorp/PNC/Home/Personal",
            "type": "BANK"
        },
        {
            "name": "BMO Harris Bank (US)",
            "url": "https://www4.harrisbank.com/us",
            "type": "BANK"
        },
        {
            "name": "Chase (US) - Bank",
            "url": "http://www.chase.com",
            "type": "BANK"
        },
        {
            "name": "Univest National Bank and Trust (US) - Bank",
            "url": "http://www.univest.net",
            "type": "BANK"
        },
        {
            "name": "Alliance Bernstein (US) - Investments",
            "url": "http://www.alliancebernstein.com/investments/us/Home.aspx?nid=5415",
            "type": "INVESTMENT"
        },
        {
            "name": "Emigrant Direct (US) - Bank",
            "url": "https://www.emigrantdirect.com",
            "type": "BANK"
        },
        {
            "name": "TD Bank (US)",
            "url": "http://www.tdbank.com/default.aspx",
            "type": "BANK"
        },
        {
            "name": "American Express Bank (Personal Savings) (US) - Bank",
            "url": "https://www.americanexpress.com/?inav=NavLogo",
            "type": "BANK"
        },
        {
            "name": "Charles Schwab (US) - Bank",
            "url": "http://www.schwab.com",
            "type": "BANK"
        },
        {
            "name": "Union Bank (US)",
            "url": "https://www.unionbank.com",
            "type": "BANK"
        },
        {
            "name": "USAA (US) - Bank",
            "url": "https://www.usaa.com",
            "type": "BANK"
        },
        {
            "name": "Charles Schwab Bank Credit Card (US)",
            "url": "http://www.schwabbank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Comerica (US) - Bank",
            "url": "http://www.comerica.com/comerica/default.html",
            "type": "BANK"
        },
        {
            "name": "M&T Bank (US)",
            "url": "https://www.mtb.com/personal/Pages/Index.aspx",
            "type": "BANK"
        },
        {
            "name": "Citizens 1st National Bank (IA) (US) - Loan",
            "url": "http://www.citizensfnb.com",
            "type": "LOAN"
        },
        {
            "name": "Morgan Stanley Online (ClientServ) (US) - Investments",
            "url": "https://www.morganstanleyclientserv.com/Default.aspx",
            "type": "INVESTMENT"
        },
        {
            "name": "Charles Schwab (US) - Investments",
            "url": "http://www.schwab.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Chase (US) - Credit Card",
            "url": "http://www.chase.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "EverBank (US)",
            "url": "http://www.everbank.com",
            "type": "BANK"
        },
        {
            "name": "Wells Fargo Advantage Funds (US) - Investments",
            "url": "http://www.wellsfargoadvantagefunds.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Wells Fargo (US) - Investments",
            "url": "http://www.wellsfargo.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Chase (US) - Loan",
            "url": "http://www.chase.com",
            "type": "LOAN"
        },
        {
            "name": "Chase (US) - Mortgage",
            "url": "http://www.chase.com",
            "type": "MORTGAGE"
        },
        {
            "name": "FIA Card Services (US)",
            "url": "https://www.ibsnetaccess.com/NASApp/NetAccess/LoginDisplay",
            "type": "CREDIT_CARD"
        },
        {
            "name": "ShareBuilder (US)",
            "url": "https://www.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Fidelity NetBenefits (401k) (US)",
            "url": "https://401k.fidelity.com/public/content/401k/Home/Landing",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (U.S. Trust Clients) (US) - Investments",
            "url": "https://wealthmanagement.bankofamerica.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Bethpage FCU (US) - Bank",
            "url": "https://www.bethpage.org",
            "type": "BANK"
        },
        {
            "name": "Bethpage FCU (US) - Loan",
            "url": "https://www.bethpage.org",
            "type": "LOAN"
        },
        {
            "name": "Bethpage FCU (US) - Mortgage",
            "url": "https://www.bethpage.org",
            "type": "MORTGAGE"
        },
        {
            "name": "BestSource CU (US) - Bank",
            "url": "http://www.bestsourcecu.org",
            "type": "BANK"
        },
        {
            "name": "BestSource CU (US) - Loan",
            "url": "http://www.bestsourcecu.org",
            "type": "LOAN"
        },
        {
            "name": "Black Hills FCU (US) - Bank",
            "url": "http://www.blackhillsfcu.org",
            "type": "BANK"
        },
        {
            "name": "Bedford Independent Federal CU (US) - Bank",
            "url": "http://www.hoosierhillscu.org",
            "type": "BANK"
        },
        {
            "name": "Business Bank of Baton Rouge (US) - Bank",
            "url": "http://www.bbbr.com",
            "type": "BANK"
        },
        {
            "name": "Business Bank of Baton Rouge (US) - Loan",
            "url": "http://www.bbbr.com",
            "type": "LOAN"
        },
        {
            "name": "BancorpSouth (US) - Bank",
            "url": "http://www.bancorpsouth.com",
            "type": "BANK"
        },
        {
            "name": "BancorpSouth (US) - Loan",
            "url": "http://www.bancorpsouth.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of Hiawassee (US) - Bank",
            "url": "http://www.bankhiawassee.com",
            "type": "BANK"
        },
        {
            "name": "Bank of Hiawassee (US) - Loan",
            "url": "http://www.bankhiawassee.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of Botetourt (US) - Bank",
            "url": "https://www.bankofbotetourt.com/home/home",
            "type": "BANK"
        },
        {
            "name": "Bank of Botetourt (US) - Loan",
            "url": "https://www.bankofbotetourt.com/home/home",
            "type": "LOAN"
        },
        {
            "name": "Bank of Holly Springs (US) - Bank",
            "url": "http://www.bankofhollysprings.com",
            "type": "BANK"
        },
        {
            "name": "Bank of Holly Springs (US) - Loan",
            "url": "http://www.bankofhollysprings.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of Versailles (US) - Bank",
            "url": "http://www.bankov.com",
            "type": "BANK"
        },
        {
            "name": "Bank of Versailles (US) - Loan",
            "url": "http://www.bankov.com",
            "type": "LOAN"
        },
        {
            "name": "Vanguard - Investments (US)",
            "url": "https://personal.vanguard.com/us/CorporatePortal",
            "type": "INVESTMENT"
        },
        {
            "name": "Chase (US) - Credit Card",
            "url": "http://www.chase.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "PayPal (US) - Bank",
            "url": "https://www.paypal.com/cgi-bin/webscr?cmd=_home",
            "type": "BANK"
        },
        {
            "name": "Capital One Credit Cards (US)",
            "url": "http://www.capitalone.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Capital One (US) - Bank",
            "url": "http://www.capitalonebank.com",
            "type": "BANK"
        },
        {
            "name": "Chase (US) - Bank",
            "url": "http://www.chase.com",
            "type": "BANK"
        },
        {
            "name": "Chase (US) - Loan",
            "url": "http://www.chase.com",
            "type": "LOAN"
        },
        {
            "name": "T. Rowe Price (US) - Investments",
            "url": "http://corporate.troweprice.com/ccw/home.do",
            "type": "INVESTMENT"
        },
        {
            "name": "thinkorswim (US) - Investments",
            "url": "http://www.thinkorswim.com/tos/client/index.jsp",
            "type": "INVESTMENT"
        },
        {
            "name": "Chase (US) - Mortgage",
            "url": "http://www.chase.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Fidelity NetBenefits (401k) (US)",
            "url": "https://401k.fidelity.com/public/content/401k/Home/Landing",
            "type": "INVESTMENT"
        },
        {
            "name": "Comerica (US) - Bank",
            "url": "http://www.comerica.com/comerica/default.html",
            "type": "BANK"
        },
        {
            "name": "Citizens 1st National Bank (IA) (US) - Loan",
            "url": "http://www.citizensfnb.com",
            "type": "LOAN"
        },
        {
            "name": "Chase (US) - Investments",
            "url": "http://www.chase.com",
            "type": "INVESTMENT"
        },
        {
            "name": "ChoiceTrade (US) - Investments",
            "url": "http://www.choicetrade.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Credit Suisse Funds (US) - Investments",
            "url": "http://www.credit-suisse.com/us/en",
            "type": "INVESTMENT"
        },
        {
            "name": "CitiBusiness Online (US) - Bank",
            "url": "http://www.citibank.com/us/citibusiness",
            "type": "BANK"
        },
        {
            "name": "Citibank (US) - Investments",
            "url": "http://www.citibank.com/us/investments",
            "type": "INVESTMENT"
        },
        {
            "name": "1st University CU - Credit Cards (US)",
            "url": "http://www.culink.net/default2.html",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Vanguard Investments (US)",
            "url": "http://www.vanguard.com/VGApp/hnw/CorporatePortal",
            "type": "INVESTMENT"
        },
        {
            "name": "JPMorgan Chase - 401k (US)",
            "url": "http://resources.hewitt.com/chase",
            "type": "INVESTMENT"
        },
        {
            "name": "Chase Cards (formerly FirstUSA) (US) - Credit Card",
            "url": "https://www.cardmemberservices.com/cmsindex.html",
            "type": "CREDIT_CARD"
        },
        {
            "name": "First National Bank and Trust of Powell (US) - Loan",
            "url": "http://www.red-e-cash.com",
            "type": "LOAN"
        },
        {
            "name": "National Farmers Union Visa Card (US)",
            "url": "https://www.cardmemberservices.com/cmsindex.html",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Cambridge Savings Bank (US)",
            "url": "http://cambridgesavings.com",
            "type": "BANK"
        },
        {
            "name": "Comerica (US) - Loan",
            "url": "http://www.comerica.com/comerica/default.html",
            "type": "LOAN"
        },
        {
            "name": "Tennessee Teachers CU (US) - Bank",
            "url": "http://www.teachers-cu.org",
            "type": "BANK"
        },
        {
            "name": "Tennessee Teachers CU (US) - Loan",
            "url": "http://www.teachers-cu.org",
            "type": "LOAN"
        },
        {
            "name": "Union National Bank (US) - Loan",
            "url": "http://www.univest-corp.com",
            "type": "LOAN"
        },
        {
            "name": "Vanguard Bank (US)",
            "url": "https://coastalbankandtrust.synovus.com",
            "type": "BANK"
        },
        {
            "name": "American Express Cards (US)",
            "url": "https://www.americanexpress.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Citi Credit Cards (US)",
            "url": "https://online.citibank.com/US/Welcome.c",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Citi Bank (online.citibank.com) (US) - Bank",
            "url": "https://online.citibank.com/US/Welcome.c",
            "type": "BANK"
        },
        {
            "name": "Charles Schwab (Retirement Plan Center) (US)",
            "url": "https://www.schwab.com/public/workplace/get_started",
            "type": "INVESTMENT"
        },
        {
            "name": "Morgan Stanley Online (ClientServ) (US) - Investments",
            "url": "https://www.morganstanleyclientserv.com/Default.aspx",
            "type": "INVESTMENT"
        },
        {
            "name": "Charles Schwab (US) - Investments",
            "url": "http://www.schwab.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Liberty First CU (US) - Bank",
            "url": "http://www.libertyfirstcu.com",
            "type": "BANK"
        },
        {
            "name": "Fidelity Cash Management Account (US) - Bank",
            "url": "http://www.fidelity.com",
            "type": "BANK"
        },
        {
            "name": "Fidelity Cash Management Account (US)",
            "url": "http://www.fidelity.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Discover Card (US)",
            "url": "https://www.discover.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Patelco CU (US) - Bank",
            "url": "http://www.patelco.org",
            "type": "BANK"
        },
        {
            "name": "Wells Fargo (US) - Credit Card",
            "url": "http://www.wellsfargo.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Lending Club (US) - Investments",
            "url": "http://www.lendingclub.com/home.action",
            "type": "INVESTMENT"
        },
        {
            "name": "American Century (US) - Investments",
            "url": "http://www.americancentury.com/index.jsp",
            "type": "INVESTMENT"
        },
        {
            "name": "FIA Card Services (US)",
            "url": "https://www.ibsnetaccess.com/NASApp/NetAccess/LoginDisplay",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Personal Capital 401K - Personal Capital",
            "url": "http://www.lincolntrustco.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Charles Schwab (US) - Bank",
            "url": "http://www.schwab.com",
            "type": "BANK"
        },
        {
            "name": "Charles Schwab Bank Credit Card (US)",
            "url": "http://www.schwabbank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "USC Credit Union (US) - Bank",
            "url": "http://www.usccreditunion.org",
            "type": "BANK"
        },
        {
            "name": "Nordstrom Card Services (US)",
            "url": "http://www.nordstrombank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Hyundai Motor Finance Company (US) - Loan",
            "url": "https://www.hmfusa.com/login",
            "type": "LOAN"
        },
        {
            "name": "Bank of America (US) - Bank",
            "url": "http://www.bankofamerica.com",
            "type": "BANK"
        },
        {
            "name": "EverBank (US)",
            "url": "http://www.everbank.com",
            "type": "BANK"
        },
        {
            "name": "U.S. Bank (US)",
            "url": "http://www.usbank.com",
            "type": "BANK"
        },
        {
            "name": "BMO Harris Bank (US)",
            "url": "https://www4.harrisbank.com/us",
            "type": "BANK"
        },
        {
            "name": "Bank of America (US) - Loan",
            "url": "http://www.bankofamerica.com",
            "type": "LOAN"
        },
        {
            "name": "Univest National Bank and Trust (US) - Bank",
            "url": "http://www.univest.net",
            "type": "BANK"
        },
        {
            "name": "Invesco (Investor Account Access) (US)",
            "url": "http://www.invesco.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Alliance Bernstein (US) - Investments",
            "url": "http://www.alliancebernstein.com/investments/us/Home.aspx?nid=5415",
            "type": "INVESTMENT"
        },
        {
            "name": "TD Bank (US)",
            "url": "http://www.tdbank.com/default.aspx",
            "type": "BANK"
        },
        {
            "name": "Charles Schwab (US) - Mortgage",
            "url": "http://www.schwab.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Citi Private Bank (US)",
            "url": "https://www.privatebank.citibank.com/index.htm",
            "type": "BANK"
        },
        {
            "name": "Colonial Savings (US) - Bank",
            "url": "https://olb.colonialsavings.com",
            "type": "BANK"
        },
        {
            "name": "Charles Schwab (US) - Credit Card",
            "url": "http://www.schwab.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "California Bank & Trust Personal Banking (US)",
            "url": "http://www.calbanktrust.com",
            "type": "BANK"
        },
        {
            "name": "California Bank & Trust Personal Banking (US) - Loan",
            "url": "http://www.calbanktrust.com",
            "type": "LOAN"
        },
        {
            "name": "California Coast CU (US) - Bank",
            "url": "http://www.calcoastcu.org",
            "type": "BANK"
        },
        {
            "name": "California Coast CU (US) - Credit Card",
            "url": "http://www.calcoastcu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "California Coast CU (US) - Loan",
            "url": "http://www.calcoastcu.org",
            "type": "LOAN"
        },
        {
            "name": "Campus FCU (US) - Bank",
            "url": "http://www.campusfederal.org",
            "type": "BANK"
        },
        {
            "name": "Morgan Stanley Online (ClientServ) (US) - Investments",
            "url": "https://www.morganstanleyclientserv.com/Default.aspx",
            "type": "INVESTMENT"
        },
        {
            "name": "Discover Card (US)",
            "url": "https://www.discover.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "TD Bank (US)",
            "url": "http://www.tdbank.com/default.aspx",
            "type": "BANK"
        },
        {
            "name": "Comerica (US) - Bank",
            "url": "http://www.comerica.com/comerica/default.html",
            "type": "BANK"
        },
        {
            "name": "Neuberger Berman Mutual Funds (US)",
            "url": "https://www.nb.com/public/DMA/MYP/home.htm",
            "type": "INVESTMENT"
        },
        {
            "name": "Eaton Vance Mutual Funds (US)",
            "url": "http://www.eatonvance.com/default.asp",
            "type": "INVESTMENT"
        },
        {
            "name": "TradeStation Securities - Client Log In (US)",
            "url": "http://www.tradestation.com/default_online.shtm",
            "type": "INVESTMENT"
        },
        {
            "name": "Nationstar Mortgage (US)",
            "url": "https://www.nationstarmtg.com/Default.aspx",
            "type": "MORTGAGE"
        },
        {
            "name": "1st University CU - Credit Cards (US)",
            "url": "http://www.culink.net/default2.html",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Discover Bank (US)",
            "url": "https://www.discover.com/online-banking",
            "type": "BANK"
        },
        {
            "name": "ExpertPlan Retirement Wealth Solutions (US)",
            "url": "https://www.expertplan.com/default1.jsp",
            "type": "INVESTMENT"
        },
        {
            "name": "Scottrade (US) - Investments",
            "url": "https://trading.scottrade.com/default.aspx",
            "type": "INVESTMENT"
        },
        {
            "name": "Digital FCU (US) - Loan",
            "url": "http://dcu.org",
            "type": "LOAN"
        },
        {
            "name": "Diners Club Consumer Club Cardmember (US) - Credit Card",
            "url": "https://www.dinersclubus.com/dce_content/personalcards",
            "type": "CREDIT_CARD"
        },
        {
            "name": "De Paul Bank (ShareBuilder) (US)",
            "url": "http://depaulbank.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Digital FCU (ShareBuilder) (US)",
            "url": "http://dcu.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Dot Money.com (ShareBuilder) (US)",
            "url": "http://dotmoney.sharebuilder.com/?u1=reggie-ready",
            "type": "INVESTMENT"
        },
        {
            "name": "Directions CU- Credit Card (US)",
            "url": "https://directionscu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Directions CU- Investments (US)",
            "url": "https://directionscu.org",
            "type": "INVESTMENT"
        },
        {
            "name": "State Bank & Trust Company (MT) (US) - Bank",
            "url": "http://statebank-dillon.com",
            "type": "BANK"
        },
        {
            "name": "Daimler-401k (US)",
            "url": "https://daimler.voyaplans.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Dell - 401k (US)",
            "url": "http://www.dell.com/us/en/gen/default.htm",
            "type": "INVESTMENT"
        },
        {
            "name": "Duke Energy - 401k (US)",
            "url": "http://duke-energy.com/decorp/content/Default.asp",
            "type": "INVESTMENT"
        },
        {
            "name": "Dreyfus (The Lion Advisor Account) (US)",
            "url": "http://www.dreyfus.com/content/iv/control?Content=/docs/index_iv.jsp&Opt=1",
            "type": "INVESTMENT"
        },
        {
            "name": "Downstate Discount Brokerage (US)",
            "url": "https://www.downstate.com/new/downstate",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of Dadeville (US) - Bank",
            "url": "http://www.bank-of-dadeville.com",
            "type": "BANK"
        },
        {
            "name": "DagInvestments (US)",
            "url": "http://dag2.yodlee.com/dag/index.do",
            "type": "INVESTMENT"
        },
        {
            "name": "DailyVal (Retirement) (US)",
            "url": "https://www.dailyval.com/Default.aspx?check=true",
            "type": "INVESTMENT"
        },
        {
            "name": "Washington State Deferred Compensation Program (US)",
            "url": "https://dcp.ingplans.com/eportal/welcome.do",
            "type": "INVESTMENT"
        },
        {
            "name": "DailyAccess Corporation (US) - Investments",
            "url": "http://www.dailyaccess.com/ws/default.shtml",
            "type": "INVESTMENT"
        },
        {
            "name": "Emigrant Direct (US) - Bank",
            "url": "https://www.emigrantdirect.com",
            "type": "BANK"
        },
        {
            "name": "DWS Investments (US)",
            "url": "https://www.dws-investments.com/EN",
            "type": "INVESTMENT"
        },
        {
            "name": "San Diego County CU (US) - Bank",
            "url": "http://www.sdccu.com",
            "type": "BANK"
        },
        {
            "name": "San Diego County CU (US) - Credit Card",
            "url": "http://www.sdccu.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "San Diego County CU (US) - Investments",
            "url": "http://www.sdccu.com",
            "type": "INVESTMENT"
        },
        {
            "name": "San Diego County CU (US) - Loan",
            "url": "http://www.sdccu.com",
            "type": "LOAN"
        },
        {
            "name": "San Diego County CU (US) - Mortgage",
            "url": "http://www.sdccu.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Dollar Bank (US)",
            "url": "http://www.dollarbank.com",
            "type": "BANK"
        },
        {
            "name": "Dollar Bank (US) - Loan",
            "url": "http://www.dollarbank.com",
            "type": "LOAN"
        },
        {
            "name": "Dreyfus Mutual Fund Shareholders (US)",
            "url": "http://www.dreyfus.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Treasury Department FCU (US) - Bank",
            "url": "http://www.tdfcu.org",
            "type": "BANK"
        },
        {
            "name": "Treasury Department FCU (US) - Loan",
            "url": "http://www.tdfcu.org",
            "type": "LOAN"
        },
        {
            "name": "Decibel Community CU (US) - Bank",
            "url": "http://www.decibelcu.com",
            "type": "BANK"
        },
        {
            "name": "Decibel Community CU (US) - Loan",
            "url": "http://www.decibelcu.com",
            "type": "LOAN"
        },
        {
            "name": "Del Norte CU (US) - Bank",
            "url": "http://www.dncu.org",
            "type": "BANK"
        },
        {
            "name": "Department of Commerce FCU (US) - Bank",
            "url": "http://www.docfcu.org",
            "type": "BANK"
        },
        {
            "name": "Department of Commerce FCU (US) - Credit Card",
            "url": "http://www.docfcu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Department of Commerce FCU (US) - Loan",
            "url": "http://www.docfcu.org",
            "type": "LOAN"
        },
        {
            "name": "Notre Dame Federal CU (US) - Bank",
            "url": "http://www.ndfcu.org",
            "type": "BANK"
        },
        {
            "name": "Notre Dame Federal CU (US) - Loan",
            "url": "http://www.ndfcu.org",
            "type": "LOAN"
        },
        {
            "name": "Dell Visa Card (US)",
            "url": "http://www.dell.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Duke Visa Card (US)",
            "url": "https://www.chase.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "National Discount Brokers Visa Card (US)",
            "url": "https://www.chase.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Notre Dame Visa Card (US)",
            "url": "http://www.firstusa.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Old Dominion University Visa Card (US)",
            "url": "https://www.chase.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "University of Denver Visa Card (US)",
            "url": "https://www.chase.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "University of California, Davis Visa Card (US)",
            "url": "http://www.cardmemberservices.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "University of California, San Diego Visa Card (US)",
            "url": "http://www.firstusa.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Citi Credit Cards (US)",
            "url": "https://online.citibank.com/US/Welcome.c",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Merrill Lynch Merrill Edge (US) - Investments",
            "url": "http://www.ml.com",
            "type": "INVESTMENT"
        },
        {
            "name": "OppenheimerFunds (US) - Investments",
            "url": "https://www.oppenheimerfunds.com",
            "type": "INVESTMENT"
        },
        {
            "name": "ADP Retirement Services - 401k (US)",
            "url": "http://www.adp.com/solutions/employer-services/retirement-services.aspx",
            "type": "INVESTMENT"
        },
        {
            "name": "ING (Your Retirement Plan) (US)",
            "url": "https://www.voya.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Sam's Club Business Credit Online Account (US) - Credit Card",
            "url": "https://www.samsclubdiscover.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Scottrade (FT) (US) - Investments",
            "url": "https://www.scottrade.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Affiliated Computer Services (US) - Loan",
            "url": "https://www.acs-education.com/bac/GENL/Home.html",
            "type": "LOAN"
        },
        {
            "name": "Mellon Investor ServiceDirect (US)",
            "url": "http://www.mellon.com/onlineservices.html",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "First Republic Bank(Banking Online) (US) - Mortgage",
            "url": "https://www.firstrepublic.com",
            "type": "MORTGAGE"
        },
        {
            "name": "U.S. Bank (US) - Mortgage",
            "url": "http://www.usbank.com",
            "type": "MORTGAGE"
        },
        {
            "name": "TD Ameritrade Plus (US) - Investments",
            "url": "https://wwws.ameritradeplus.com",
            "type": "INVESTMENT"
        },
        {
            "name": "ASI FCU (US) - Loan",
            "url": "http://www.asifcu.org",
            "type": "LOAN"
        },
        {
            "name": "ASI FCU (US) - Mortgage",
            "url": "http://www.asifcu.org",
            "type": "MORTGAGE"
        },
        {
            "name": "Downers Grove National Bank (US)",
            "url": "http://www.dgnb.com",
            "type": "BANK"
        },
        {
            "name": "Digital FCU (US) - Bank",
            "url": "http://www.dcu.org",
            "type": "BANK"
        },
        {
            "name": "Digital FCU (US) - Credit Card",
            "url": "http://www.dcu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Digital FCU (US) - Mortgage",
            "url": "http://www.dcu.org",
            "type": "MORTGAGE"
        },
        {
            "name": "Direct Merchants Bank (US) - Credit Card",
            "url": "http://www.directmerchantsbank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Delaware County Bank & Trust (US) - Bank",
            "url": "http://www.webdcb.com",
            "type": "BANK"
        },
        {
            "name": "Dovenmuehle Mortgage (US)",
            "url": "http://www.dovenmuehle.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Delta Community CU (US) - Bank",
            "url": "http://www.deltacommunitycu.com/main/index1.aspx",
            "type": "BANK"
        },
        {
            "name": "Delta Community CU (US) - Credit Card",
            "url": "http://www.decu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Delta Community CU (US) - Loan",
            "url": "http://www.decu.org",
            "type": "LOAN"
        },
        {
            "name": "Delta Community CU (US) - Mortgage",
            "url": "http://www.deltacommunitycu.com/main/index1.aspx",
            "type": "MORTGAGE"
        },
        {
            "name": "Dain Rauscher Connect (US) - Investments",
            "url": "https://www.rbcwm-usa.com/index.htm",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (US) - Bank",
            "url": "http://www.bankofamerica.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Bank of America (US) - Loan",
            "url": "http://www.bankofamerica.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of America (US) - Mortgage",
            "url": "http://www.bankofamerica.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Bank of the West (US) - Bank",
            "url": "http://www.bankofthewest.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America 401k (US)",
            "url": "http://www.bankofamerica.com",
            "type": "INVESTMENT"
        },
        {
            "name": "HSBC Bank (US)",
            "url": "https://www.us.hsbc.com/1/2/home/personal-banking",
            "type": "BANK"
        },
        {
            "name": "HSBC Bank (US) - Credit Card",
            "url": "https://www.us.hsbc.com/1/2/home/personal-banking",
            "type": "CREDIT_CARD"
        },
        {
            "name": "HSBC Bank (US) - Loan",
            "url": "https://www.us.hsbc.com/1/2/home/personal-banking",
            "type": "LOAN"
        },
        {
            "name": "Discover Bank (US)",
            "url": "https://www.discover.com/online-banking",
            "type": "BANK"
        },
        {
            "name": "Century Bank (MA) (US) - Bank",
            "url": "http://www.century-bank.com",
            "type": "BANK"
        },
        {
            "name": "Heartland Bank (MO) (US) - Bank",
            "url": "http://www.heartland-bank.com",
            "type": "BANK"
        },
        {
            "name": "Heartland Bank (MO) (US) - Credit Card",
            "url": "http://www.heartland-bank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Heartland Bank (MO) (US) - Loan",
            "url": "http://www.heartland-bank.com",
            "type": "LOAN"
        },
        {
            "name": "Heartland Bank (MO) (US) - Mortgage",
            "url": "http://www.heartland-bank.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Liberty Bank (CT) Personal (US) - Bank",
            "url": "http://www.liberty-bank.com",
            "type": "BANK"
        },
        {
            "name": "Liberty Bank (CT) Personal (US) - Mortgage",
            "url": "http://www.liberty-bank.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Western Bank (US)",
            "url": "http://www.western-bank.com",
            "type": "BANK"
        },
        {
            "name": "The Bank of Nashville (US) - Bank",
            "url": "https://bankofnashville.synovus.com",
            "type": "BANK"
        },
        {
            "name": "The Bank of Nashville (US) - Loan",
            "url": "https://bankofnashville.synovus.com",
            "type": "LOAN"
        },
        {
            "name": "MidAmerica Bank (US) - Loan",
            "url": "http://www.midamerica-bank.com",
            "type": "LOAN"
        },
        {
            "name": "MidAmerica Bank (US) - Mortgage",
            "url": "http://www.midamerica-bank.com",
            "type": "MORTGAGE"
        },
        {
            "name": "City National Bank (WV, KY, VA, OH) (US) - Bank",
            "url": "http://www.citynational-bank.com",
            "type": "BANK"
        },
        {
            "name": "City National Bank (WV, KY, VA, OH) (US) - Loan",
            "url": "http://www.citynational-bank.com",
            "type": "LOAN"
        },
        {
            "name": "BankAtlantic (ShareBuilder) (US)",
            "url": "http://bankatlantic.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "SPIRE FCU (US) - Bank",
            "url": "https://www.spire-banking.com",
            "type": "BANK"
        },
        {
            "name": "SPIRE FCU (US) - Credit Card",
            "url": "https://www.spire-banking.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Southern Bancorp (US) - Bank",
            "url": "https://banksouthern.com",
            "type": "BANK"
        },
        {
            "name": "Jefferson Bank of Missouri (US) - Bank",
            "url": "http://www.jefferson-bank.com",
            "type": "BANK"
        },
        {
            "name": "Merchants & Southern Bank (US)",
            "url": "http://www.ms-bank.com",
            "type": "BANK"
        },
        {
            "name": "Wells Fargo (US) - Bank",
            "url": "http://www.wellsfargo.com",
            "type": "BANK"
        },
        {
            "name": "Citi Bank (online.citibank.com) (US) - Bank",
            "url": "https://online.citibank.com/US/Welcome.c",
            "type": "BANK"
        },
        {
            "name": "E*TRADE (US) - Bank",
            "url": "https://us.etrade.com",
            "type": "BANK"
        },
        {
            "name": "Liberty First CU (US) - Bank",
            "url": "http://www.libertyfirstcu.com",
            "type": "BANK"
        },
        {
            "name": "U.S. Bank (US)",
            "url": "http://www.usbank.com",
            "type": "BANK"
        },
        {
            "name": "PayPal (US) - Bank",
            "url": "https://www.paypal.com/cgi-bin/webscr?cmd=_home",
            "type": "BANK"
        },
        {
            "name": "Fidelity Cash Management Account (US) - Bank",
            "url": "http://www.fidelity.com",
            "type": "BANK"
        },
        {
            "name": "E-LOAN (US) - Bank",
            "url": "http://www.eloan.com",
            "type": "BANK"
        },
        {
            "name": "Patelco CU (US) - Bank",
            "url": "http://www.patelco.org",
            "type": "BANK"
        },
        {
            "name": "Capital One (US) - Bank",
            "url": "http://www.capitalonebank.com",
            "type": "BANK"
        },
        {
            "name": "PNC Bank (US)",
            "url": "https://www.pnc.com/webapp/unsec/Homepage.do?siteArea=/PNCCorp/PNC/Home/Personal",
            "type": "BANK"
        },
        {
            "name": "BMO Harris Bank (US)",
            "url": "https://www4.harrisbank.com/us",
            "type": "BANK"
        },
        {
            "name": "Chase (US) - Bank",
            "url": "http://www.chase.com",
            "type": "BANK"
        },
        {
            "name": "Univest National Bank and Trust (US) - Bank",
            "url": "http://www.univest.net",
            "type": "BANK"
        },
        {
            "name": "Emigrant Direct (US) - Bank",
            "url": "https://www.emigrantdirect.com",
            "type": "BANK"
        },
        {
            "name": "TD Bank (US)",
            "url": "http://www.tdbank.com/default.aspx",
            "type": "BANK"
        },
        {
            "name": "American Express Bank (Personal Savings) (US) - Bank",
            "url": "https://www.americanexpress.com/?inav=NavLogo",
            "type": "BANK"
        },
        {
            "name": "Charles Schwab (US) - Bank",
            "url": "http://www.schwab.com",
            "type": "BANK"
        },
        {
            "name": "Union Bank (US)",
            "url": "https://www.unionbank.com",
            "type": "BANK"
        },
        {
            "name": "USAA (US) - Bank",
            "url": "https://www.usaa.com",
            "type": "BANK"
        },
        {
            "name": "Charles Schwab Bank Credit Card (US)",
            "url": "http://www.schwabbank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Comerica (US) - Bank",
            "url": "http://www.comerica.com/comerica/default.html",
            "type": "BANK"
        },
        {
            "name": "M&T Bank (US)",
            "url": "https://www.mtb.com/personal/Pages/Index.aspx",
            "type": "BANK"
        },
        {
            "name": "Citizens 1st National Bank (IA) (US) - Loan",
            "url": "http://www.citizensfnb.com",
            "type": "LOAN"
        },
        {
            "name": "Chase (US) - Credit Card",
            "url": "http://www.chase.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Wells Fargo (US) - Investments",
            "url": "http://www.wellsfargo.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Chase (US) - Loan",
            "url": "http://www.chase.com",
            "type": "LOAN"
        },
        {
            "name": "Chase (US) - Mortgage",
            "url": "http://www.chase.com",
            "type": "MORTGAGE"
        },
        {
            "name": "FIA Card Services (US)",
            "url": "https://www.ibsnetaccess.com/NASApp/NetAccess/LoginDisplay",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Nordstrom Card Services (US)",
            "url": "http://www.nordstrombank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "U.S. Bank (US) - Credit Card",
            "url": "http://www.usbank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Fifth Third Bank (US)",
            "url": "http://www.53.com",
            "type": "BANK"
        },
        {
            "name": "SunTrust Bank (US)",
            "url": "https://internetbanking.suntrust.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America (U.S. Trust Clients) (US) - Investments",
            "url": "https://wealthmanagement.bankofamerica.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of the West (TX) (US) - Bank",
            "url": "http://www.bnkwest.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "BancorpSouth (US) - Bank",
            "url": "http://www.bancorpsouth.com",
            "type": "BANK"
        },
        {
            "name": "BancorpSouth (US) - Loan",
            "url": "http://www.bancorpsouth.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of Hiawassee (US) - Bank",
            "url": "http://www.bankhiawassee.com",
            "type": "BANK"
        },
        {
            "name": "Bank of Hiawassee (US) - Loan",
            "url": "http://www.bankhiawassee.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of Botetourt (US) - Bank",
            "url": "https://www.bankofbotetourt.com/home/home",
            "type": "BANK"
        },
        {
            "name": "Bank of Botetourt (US) - Loan",
            "url": "https://www.bankofbotetourt.com/home/home",
            "type": "LOAN"
        },
        {
            "name": "Bank of Holly Springs (US) - Bank",
            "url": "http://www.bankofhollysprings.com",
            "type": "BANK"
        },
        {
            "name": "Bank of Holly Springs (US) - Loan",
            "url": "http://www.bankofhollysprings.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of Versailles (US) - Bank",
            "url": "http://www.bankov.com",
            "type": "BANK"
        },
        {
            "name": "Bank of Versailles (US) - Loan",
            "url": "http://www.bankov.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of Montgomery (US) - Bank",
            "url": "http://www.bofm.com",
            "type": "BANK"
        },
        {
            "name": "Bank of Montgomery (US) - Loan",
            "url": "http://www.bofm.com",
            "type": "LOAN"
        },
        {
            "name": "BankDirect (US) - Bank",
            "url": "http://www.bankdirect.com/index.asp",
            "type": "BANK"
        },
        {
            "name": "BankAtlantic (US) - Loan",
            "url": "http://www.bankatlantic.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of the West (US) - Credit Card",
            "url": "http://www.comfedbank.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Bank of the West (US) - Loan",
            "url": "http://www.bankofthewest.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of the West (US) - Mortgage",
            "url": "http://www.comfedbank.com",
            "type": "MORTGAGE"
        },
        {
            "name": "Bank of Arizona (US) - Bank",
            "url": "https://www.bankofarizona.com",
            "type": "BANK"
        },
        {
            "name": "Bank Of Bartlett (US) - Bank",
            "url": "http://www.bankofbartlett.com",
            "type": "BANK"
        },
        {
            "name": "Bank United (TX) (US) - Bank",
            "url": "http://www.bankunited.com",
            "type": "BANK"
        },
        {
            "name": "Bank United (TX) (US) - Loan",
            "url": "http://www.bankunited.com",
            "type": "LOAN"
        },
        {
            "name": "American Express Cards (US)",
            "url": "https://www.americanexpress.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "American Funds (US) - Investments",
            "url": "https://www.americanfunds.com",
            "type": "INVESTMENT"
        },
        {
            "name": "American Century (US) - Investments",
            "url": "http://www.americancentury.com/index.jsp",
            "type": "INVESTMENT"
        },
        {
            "name": "American Express Bank (Personal Savings) (US) - Bank",
            "url": "https://www.americanexpress.com/?inav=NavLogo",
            "type": "BANK"
        },
        {
            "name": "America First CU (ShareBuilder) (US)",
            "url": "http://americafirst.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Americas Choice CU (ShareBuilder) (US)",
            "url": "http://americaschoicecu.sharebuilder.com",
            "type": "INVESTMENT"
        },
        {
            "name": "First American Bank (IA & FL) (US) - Bank",
            "url": "http://www.first-american-bank.com",
            "type": "BANK"
        },
        {
            "name": "AmericaNet Bank (US)",
            "url": "http://americanetbank.com",
            "type": "BANK"
        },
        {
            "name": "American Southwest CU (US) - Bank",
            "url": "http://americansouthwestcu.org",
            "type": "BANK"
        },
        {
            "name": "American Bank And Trust of Cumberland (US) - Bank",
            "url": "https://americanbt.com",
            "type": "BANK"
        },
        {
            "name": "American FSB (US) - Bank",
            "url": "http://www.americanfsb.com",
            "type": "BANK"
        },
        {
            "name": "Ameriprise Financial (US) - Bank",
            "url": "http://www.ameriprise.com/default-home.asp",
            "type": "BANK"
        },
        {
            "name": "Ameriprise Financial (US) - Credit Card",
            "url": "http://www.ameriprise.com/default-home.asp",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Ameriprise Financial (US) - Investments",
            "url": "http://www.ameriprise.com/default-home.asp",
            "type": "INVESTMENT"
        },
        {
            "name": "Ameriprise Financial (US) - Loan",
            "url": "http://www.ameriprise.com/default-home.asp",
            "type": "LOAN"
        },
        {
            "name": "America First CU (US) - Bank",
            "url": "http://www.americafirst.com",
            "type": "BANK"
        },
        {
            "name": "America First CU (US) - Credit Card",
            "url": "http://www.americafirst.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "America First CU (US) - Loan",
            "url": "http://www.americafirst.com",
            "type": "LOAN"
        },
        {
            "name": "AmeriCU CU - Credit Cards (US)",
            "url": "http://www.americu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "American CU - Credit Cards (US)",
            "url": "http://www.americancu.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "American State Bank (IA) (US) - Bank",
            "url": "http://www.americanstatebank.com",
            "type": "BANK"
        },
        {
            "name": "American State Bank (IA) (US) - Loan",
            "url": "http://www.americanstatebank.com",
            "type": "LOAN"
        },
        {
            "name": "Ameris Bank (US)",
            "url": "http://www.amerisbank.com",
            "type": "BANK"
        },
        {
            "name": "Ameris Bank (US) - Loan",
            "url": "http://www.amerisbank.com",
            "type": "LOAN"
        },
        {
            "name": "American Spirit FCU - Investments (US)",
            "url": "http://www.americanspirit.org",
            "type": "INVESTMENT"
        },
        {
            "name": "America's Christian CU (US) - Bank",
            "url": "https://www.americaschristiancu.com",
            "type": "BANK"
        },
        {
            "name": "America's Christian CU (US) - Loan",
            "url": "https://www.americaschristiancu.com",
            "type": "LOAN"
        },
        {
            "name": "America's Christian CU (US) - Mortgage",
            "url": "https://www.americaschristiancu.com",
            "type": "MORTGAGE"
        },
        {
            "name": "America's CU (TX) (US) - Bank",
            "url": "https://www.americascu.org",
            "type": "BANK"
        },
        {
            "name": "American Trust (US) - Bank",
            "url": "http://www.americantrust.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America (US) - Bank",
            "url": "http://www.bankofamerica.com",
            "type": "BANK"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "TD Ameritrade Inc. (US) - Investments",
            "url": "https://www.tdameritrade.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (US) - Loan",
            "url": "http://www.bankofamerica.com",
            "type": "LOAN"
        },
        {
            "name": "Bank of America (US) - Mortgage",
            "url": "http://www.bankofamerica.com",
            "type": "MORTGAGE"
        },
        {
            "name": "American Education Services Student Loan (US)",
            "url": "http://www.aessuccess.org",
            "type": "LOAN"
        },
        {
            "name": "Bank of America 401k (US)",
            "url": "http://www.bankofamerica.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (U.S. Trust Clients) (US) - Investments",
            "url": "https://wealthmanagement.bankofamerica.com",
            "type": "INVESTMENT"
        },
        {
            "name": "American Funds Retirement Solution(Capital Group) (US)",
            "url": "https://myretirement.retire.americanfunds.com/home.htm",
            "type": "INVESTMENT"
        },
        {
            "name": "Bank of America (US) - Credit Card",
            "url": "http://www.bankofamerica.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "TD Ameritrade Plus (US) - Investments",
            "url": "https://wwws.ameritradeplus.com",
            "type": "INVESTMENT"
        },
        {
            "name": "America's First FCU (US) - Bank",
            "url": "http://www.amfirst.org",
            "type": "BANK"
        },
        {
            "name": "Great American CU (US) - Loan",
            "url": "http://www.greatamerican.org",
            "type": "LOAN"
        },
        {
            "name": "American Assn. of University Women Visa Card (US)",
            "url": "https://www.chase.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "America Online Visa Card (US)",
            "url": "https://www.chase.com",
            "type": "CREDIT_CARD"
        },
        {
            "name": "American Bank Online (US) - Bank",
            "url": "http://www.pcbanker.com",
            "type": "BANK"
        },
        {
            "name": "Premier America CU (CA,TX) (US) - Bank",
            "url": "https://www.premieramerica.com/home/home",
            "type": "BANK"
        },
        {
            "name": "Premier America CU (CA,TX) (US) - Loan",
            "url": "https://www.premieramerica.com/home/home",
            "type": "LOAN"
        },
        {
            "name": "National American Bank (US)",
            "url": "http://www.natambank.com",
            "type": "BANK"
        },
        {
            "name": "First American Bank (IL) (US) - Bank",
            "url": "http://www.firstambank.com",
            "type": "BANK"
        },
        {
            "name": "First American Bank (IL) (US) - Loan",
            "url": "http://www.firstambank.com",
            "type": "LOAN"
        },
        {
            "name": "Prudential (US) - Investments",
            "url": "http://www.prudential.com/insurance",
            "type": "INVESTMENT"
        },
        {
            "name": "FIA Card Services (US)",
            "url": "https://www.ibsnetaccess.com/NASApp/NetAccess/LoginDisplay",
            "type": "CREDIT_CARD"
        },
        {
            "name": "Future Scholar 529 College Savings Plan (US)",
            "url": "http://www.futurescholar.com",
            "type": "INVESTMENT"
        },
        {
            "name": "Mellon Investor ServiceDirect (US)",
            "url": "http://www.mellon.com/onlineservices.html",
            "type": "INVESTMENT"
        },
        {
            "name": "SAFE CU (US) - Bank",
            "url": "https://www.safecu.org",
            "type": "BANK"
        },
        {
            "name": "SAFE CU (US) - Credit Card",
            "url": "https://www.safecu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "SAFE CU (US) - Loan",
            "url": "https://www.safecu.org",
            "type": "LOAN"
        },
        {
            "name": "SAFE CU (US) - Mortgage",
            "url": "https://www.safecu.org",
            "type": "MORTGAGE"
        },
        {
            "name": "Wells Fargo Retirement Services (US)",
            "url": "https://retirementservices.wellsfargo.com/Online/Financial/Business/Service?action=ampLogin",
            "type": "INVESTMENT"
        },
        {
            "name": "American National Bank Omaha (US) - Bank",
            "url": "http://www.anbank.com",
            "type": "BANK"
        },
        {
            "name": "America California Bank (US)",
            "url": "http://www.acbank.com",
            "type": "BANK"
        },
        {
            "name": "American Airlines FCU (US) - Bank",
            "url": "https://www.aacreditunion.org/index.html",
            "type": "BANK"
        },
        {
            "name": "American Airlines FCU (US) - Credit Card",
            "url": "https://www.aacreditunion.org/index.html",
            "type": "CREDIT_CARD"
        },
        {
            "name": "American Airlines FCU (US) - Loan",
            "url": "https://www.aacreditunion.org/index.html",
            "type": "LOAN"
        },
        {
            "name": "American Airlines FCU (US) - Mortgage",
            "url": "https://www.aacreditunion.org/index.html",
            "type": "MORTGAGE"
        },
        {
            "name": "America's CU (WA) (US) - Bank",
            "url": "https://www.youracu.org",
            "type": "BANK"
        },
        {
            "name": "America's CU (WA) (US) - Credit Card",
            "url": "https://www.youracu.org",
            "type": "CREDIT_CARD"
        },
        {
            "name": "America's CU (WA) (US) - Loan",
            "url": "https://www.youracu.org",
            "type": "LOAN"
        }
    ]
}

export default App;
