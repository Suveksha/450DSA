class KadaneAlgorithm{

    // arr: input array
    // n: size of array
    //Function to find the sum of contiguous subarray with maximum sum.
    long maxSubarraySum(int arr[], int n){
        
        long currSum=0;
        long maxSum=Integer.MIN_VALUE;
        
        for(int i=0; i<n; i++)
        {
            currSum+=arr[i];
            
            if(currSum>maxSum)
            maxSum=currSum;
            
            if(currSum<0)
            currSum=0;
        }
        
        return maxSum;
    }
    
}

