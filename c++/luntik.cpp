#include<iostream>
using namespace std;
int main()
{
    int t;
    int a,b,c;
    int sum=0;
    cin>>t;
    while(t--)
    {
        cin>>a>>b>>c;
        sum=a+2*b+3*c;
        if(sum%2==0){
            cout<<"0";
        }
        else{
            cout<<"1";

        }

    }
}