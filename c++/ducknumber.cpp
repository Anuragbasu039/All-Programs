#include<iostream>
using namespace std;
int main()
{
    int dn,n,flag;
    cout<<"Enter the duck number";
    cin>>dn;

    /* for(dn=1;dn<=500;dn++)
    {
        
    }
    cout<<dn<< " "; */
    
     while (dn>0)
    {
        if(dn%10==0)
        {
            flag=1;
        }
        dn/=10;
    }
    if(n>0 && flag==1)
    {
        cout<<"the number is duck number";
    }
    else{
        cout<<"the number is not duck number";
    } 
    
}
