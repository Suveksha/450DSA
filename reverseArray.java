import java.util.*;

public class reverseArray{
    public static void main(String args[]) {
        Scanner sc=new Scanner(System.in);

        System.out.println("Enter the length of array");
        int n=sc.nextInt();
        int arr[]=new int[n];

        for(int i=0; i<n; i++)
        arr[i]=sc.nextInt();

        reverse(arr, 0, n-1);

        System.out.println("Reverse: ");
        for(int x:arr)
        System.out.print(x);
    }

    static void reverse(int arr[], int start, int end)
    {
        if(start>=end)
        return;

        int temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;

        reverse(arr, start+1, end-1);
    }
}