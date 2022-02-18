
class Solution{
    public static int doUnion(int a[], int n, int b[], int m) 
    {
        Set<Integer> union=new HashSet<>();
        
        for(int i=0; i<n; i++)
        union.add(a[i]);
        
        for(int j=0; j<m; j++)
        union.add(b[j]);
        
        return union.size();
    }
    
   
}
