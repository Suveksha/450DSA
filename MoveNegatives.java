public class MoveNegatives{
    public static void main(String args[])
    {
        int arr[]={-12, 11, -13, -5, 6, -7, 5, -3, -6, -1, 7, -10000};

        int high=arr.length-1,low=0;

        while(low<high)
        {
          if(arr[low]<0)
          low++;
          else
          {
              int temp=arr[low];
              arr[low]=arr[high];
              arr[high]=temp;
              high--;
          }
        }

        for(int x:arr)
        System.out.print(x+" ");
    }
}