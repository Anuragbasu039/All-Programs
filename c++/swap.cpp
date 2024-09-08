#include<iostream>
using namespace std;
int main()
{
    int num1;
    int num2;
    cin>>num1>>num2;
    cout<<"enter the value:"<<num1<<endl;
    cout<<"enter the value:"<<num2<<endl;

    
    int temp;
    temp=num1;
    num1=num2;
    num2=temp;
    cout<<"enter the value:"<<num1<<endl;
    cout<<"enter the value:"<<num2<<endl;
    return 0;
}