Take Home Project - Stock Performance Dashboard

Stack and Frame work used used:
React/JS (Preferred), Supabase (OAuth)

Libaries:
Material UI (Build UI fast), React-Tradingview (for chartings), React-Router-Dom (Routing between pages e.g, login -> dashboard)

1. Login page
For the login page - I had customized it using simple css to make a login card, and used material ui for styled components. Once the front end was done I had connected to my backend via supabase which handled the auth system for me.

2. Pick 3 Stocks and display
I had initally planned on writing it out from scratch but then I remember trading view provided widgets. So I was able to use a tradingview library for my widgets and then passed user data into the widgets via props. The tradingview widget allowed me to focus on providing the data while they provided the tools.

3. This ties in to 2, trading view allows us provide information while they provide the tools. Users are able to see data from a great range/interval.

4. Login with google / facebook was easily implemented by using supa base and providing my client/app secrets from facebook/google developers api.

5. Can configure the stock, just need to type in which stock.

6. It uses real time changes.

7. Deployed on AWS amplify!
