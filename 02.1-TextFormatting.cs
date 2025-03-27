using System;
using System.Text.RegularExpressions;

class Solution
{
    static void Main(string[] args)
    {
        string intext = Console.ReadLine().Trim().ToLower();

        string result = Regex.Replace(intext, @"^\w", match => match.Value.ToUpper());
        result = Regex.Replace(result, @"\s*,+(\s*,\s*,)?\s*", ", ");
        result = Regex.Replace(result, @"\s*\.{1,}\s*", ".");

        result = Regex.Replace(result, @"\.([a-z])", match => ". " + match.Groups[1].Value.ToUpper());
        Console.WriteLine(result);
    }
}