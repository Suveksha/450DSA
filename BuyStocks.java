class Solution {
    public int maxProfit(int[] prices) {
        
        int minSoFar=prices[0];
        int maxProfit=0;
        
        for(int i=0; i<prices.length; i++)
        {
            if(prices[i]<minSoFar)
                minSoFar=prices[i];
            
            int profit=prices[i]-minSoFar;
            
            if(maxProfit<profit)
                maxProfit=profit;
        }
        
        if(maxProfit==0)
            return 0;
        else
            return maxProfit;
        
    }
}
