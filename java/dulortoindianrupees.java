import java.util.*;
class dulortoindianrupees {
    public static void main(String [] args)
    {
        int in,d,conv,ch;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter your choice");
        System.out.println("1 for in to $");
        System.out.println("2 for $ to in");
        ch=sc.nextInt();

        switch(ch){
            case 1:
            System.out.println("Enter the indian rupees");
            in=sc.nextInt();  //5000
            conv=in/75;   // 5000
            System.out.println(" converted in to $"+conv);
            break;

            case 2:
            System.out.println("Enter the $");
            d=sc.nextInt();
            conv=d*75;
            System.out.println(" converted $ to in"+conv);
            break;

            default:
            System.out.println("Invalid");
            break;
        }
    }
}
