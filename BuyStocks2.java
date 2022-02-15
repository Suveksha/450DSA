class Solution {
    public int maxProfit(int[] prices) {
        int profit=0;
        
        for(int i=1; i<prices.length; i++)
        {
            if(prices[i-1]<prices[i]) //previous price is less than current price
                profit+=prices[i]-prices[i-1];  
        }
        return profit;
    }
}
