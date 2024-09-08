import java.util.*;

import java.util.*;

public class function {
    //public static int CalculateSum(int a, int b){
      //  int sum = a + b;
       // return sum;
        
    //}
    //public static void main(String args[]) {
        //Scanner sc = new Scanner(System.in);
          //  int a = sc.nextInt();
           // int b = sc.nextInt();
           // int Sum = CalculateSum(a , b);
           // System.out.println(Sum);
   // }

     //print your name

     //public static void printmyname(String name) {
        //System.out.println(name);
       // return;
    // }

     //public static void main(String args[]) {
       // Scanner sc = new Scanner(System.in);
       // String name = sc.next();
       // printmyname(name);
     //}

            //multiple two number

            //public static int CalculateProduct(int a, int b) {
               // return a * b;
            //}
            //public static void main(String args[]) {
               // Scanner Sc = new Scanner(System.in);
               // int a = Sc.nextInt();
               // int b = Sc.nextInt();
               // System.out.println(CalculateProduct(a, b));

           // }

                      //factorial number
                      public static void PrintFactorial(int n){
                        if(n < 0) {
                          System.out.println("invalid number");
                          return;
                
                        }
                        int factorial = 1;
                        for(int i=n;i>=1;i--){
                          factorial = factorial * i;
                        }
                        System.out.println(factorial);
                        return;
                      }
                      public static void main(String args[]) {
                        Scanner Sc = new Scanner(System.in);
                        int n = Sc.nextInt();
                        PrintFactorial(n);
                      }
    }

