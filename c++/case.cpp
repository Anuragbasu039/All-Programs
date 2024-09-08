#include<iostream>
using namespace std;

int main()
{
    char ch;
    cout<<"Enter any character"<<endl;
    cin>>ch;
    if(ch>=65 && ch<=90){
        cout<<"char is upper case"<< endl;
    }
    else if(ch>=97 && ch<=122){
        cout<<"char is lower case"<<endl;
    }
    else if(ch>=48 && ch<=57){
        cout<<"char is numaric"<<endl;
    }
    else{
        cout<< "Invalid case" <<endl;
    }
}