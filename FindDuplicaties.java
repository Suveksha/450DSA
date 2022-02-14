import java.util.*;
 
public class FindDuplicates {
      
    static int findduplicate(int []arr, int n)
    {
          
        
        if (n <= 1)
            return -1;
      
        
        int slow = arr[0];
        int fast = arr[arr[0]];
      
       
        while (fast != slow)
        {
      
           
            slow = arr[slow];
      
     
            fast = arr[arr[fast]];
        }
      
       
        fast = 0;
        while (slow != fast)
        {
            slow = arr[slow];
            fast = arr[fast];
        }
        return slow;
    }

    public static void main(String args[])
    {
        int []arr = {1, 2, 3, 4, 5, 6, 3};
        int n = arr.length;
        System.out.print(findduplicate(arr, n));
    }
}
