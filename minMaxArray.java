import java.util.*;
public class minMaxArray{

    static class Pair{
        int min;
        int max;
    }
    public static void main(String args[]) {
        Scanner sc=new Scanner(System.in);

        int n=sc.nextInt();
        int arr[]=new int[n];

        for(int i=0; i<n; i++)
        arr[i]=sc.nextInt();

        Pair ans=new Pair();
        ans=findMinMax(arr, 0, n-1);

        System.out.println("Min="+ans.min+"Max="+ans.max);
    }

    public static Pair findMinMax(int arr[], int low, int high)
    {
        Pair ml=new Pair();
        Pair mr=new Pair();
        Pair fMinMax=new Pair();

        //if the array has only one element
        if(high==low)
        {
            fMinMax.min=arr[low];
            fMinMax.max=arr[high];
            return fMinMax;
        }

        if(high==low+1)
        {
            if(arr[high]<arr[low])
            {
            fMinMax.min=arr[high];
            fMinMax.max=arr[low];
            }
            else
            {
                fMinMax.min=arr[low];
                fMinMax.max=arr[high];
            }
            return fMinMax;
        }

        int mid=(low+high)/2;
        ml=findMinMax(arr,low,mid);
        mr=findMinMax(arr, mid+1, high);

        if(ml.min<mr.min)
        fMinMax.min=ml.min;
        else
        fMinMax.min=mr.min;

        if(ml.max<mr.max)
        fMinMax.max=mr.max;
        else
        fMinMax.max=ml.max;

        return fMinMax;
    }
}