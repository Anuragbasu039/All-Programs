#include<iostream>
using namespace std;
int main()
{
    int day;
    cin>>day;

    switch(day)
    {
    case 1:
    cout<<"Monday";
    break;

    case 2:
    cout<<"thusday";
    break;

    case 3:
    cout<<"wednesday";
    break;

    default:
    cout<<"invalid day";
    }

    return 0;
}