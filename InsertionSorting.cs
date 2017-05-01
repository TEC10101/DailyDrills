using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intro_to_Tutorial_Challenges
{
    class InsertionSorting
    {
        static void Main(string[] args)
        {
            #region Program Design Flow:
            //Launch Program > Main() > Preparation > Method() > Return > Preparation > Next()/Method() > Return...
            #endregion
            #region Instructions - Insertion Sort Part 1 Insertion:

            /*Insertion Sort Part 1 Insertion:
            One common task for computers is to sort data.For example, people might want to see all their files on a computer sorted by size.Since sorting is a simple problem with many different possible solutions, it is often used to introduce the study of algorithms.

            Insertion Sort
            These challenges will cover Insertion Sort, a simple and intuitive sorting algorithm.We will first start with an already sorted list.

            Insert element into sorted list
            Given a sorted list with an unsorted number  in the rightmost cell, can you write some simple code to insert  into the array so that it remains sorted ?

            Print the array every time a value is shifted in the array until the array is fully sorted.The goal of this challenge is to follow the correct order of insertion sort.

            Guideline: You can copy the value of  to a variable and consider its cell "empty".Since this leaves an extra cell empty on the right, you can shift everything over until  can be inserted.This will create a duplicate of each value, but when you reach the right spot, you can replace it with.

            Input Format
            There will be two lines of input:

             -the size of the array
             -the unsorted array of integers

            Output Format
            On each line, output the entire array every time an item is shifted in it.

            Sample Input
            5
            2 4 6 8 3

            Sample Output
            2 4 6 8 8
            2 4 6 6 8
            2 4 4 6 8
            2 3 4 6 8

            Explanation

            3 is removed from the end of the array.
            In the 1st line, so 8 is shifted one cell to the right.
            In the 2nd line, so 6 is shifted one cell to the right.
            In the 3rd line, so 4 is shifted one cell to the right.
            In the 4th line, so 3 is placed at position.*/
            #endregion
            #region Instructions - Insertion Sort Part 2 Sorting:
            /*

            In Insertion Sort Part 1, you sorted one element into an array. Using the same approach repeatedly, can you sort an entire unsorted array?

            Guideline: You already can place an element into a sorted array. How can you use that code to build up a sorted array, one element at a time? Note that in the first step, when you consider an array with just the first element - that is already "sorted" since there's nothing to its left that is smaller.

            In this challenge, don't print every time you move an element. Instead, print the array after each iteration of the insertion-sort, i.e., whenever the next element is placed at its correct position.

            Since the array composed of just the first element is already "sorted", begin printing from the second element and on.

            Input Format 
            There will be two lines of input:

             - the size of the array
             - a list of numbers that makes up the array

            Output Format 
            On each line, output the entire array at every iteration.

            Sample Input
            6
            1 4 3 5 6 2

            Sample Output
            1 4 3 5 6 2 
            1 3 4 5 6 2 
            1 3 4 5 6 2 
            1 3 4 5 6 2 
            1 2 3 4 5 6 

            Explanation 
            Insertion Sort checks 4 first and doesn't need to move it, so it just prints out the array. Next, 3 is inserted next to 1, and the array is printed out. This continues one element at a time until the entire array is sorted. 
             
             */
            #endregion

            ///
            /// Start Insertion Sort Part 1 - Insertion:
            ///

            int _ar_size;
            _ar_size = Convert.ToInt32(Console.ReadLine());
            int[] _ar = new int[_ar_size];
            String elements = Console.ReadLine();
            String[] split_elements = elements.Split(' ');
            for (int _ar_i = 0; _ar_i < _ar_size; _ar_i++)
            {
                _ar[_ar_i] = Convert.ToInt32(split_elements[_ar_i]);
            }

            insertionSort_p1(_ar);
            Console.ReadLine();
            Console.Clear();

            ///
            /// Start Insertion Sort Part 2 - Sorting:
            ///

            int _ar_p2_size;
            _ar_p2_size = Convert.ToInt32(Console.ReadLine());
            int[] _ar_p2 = new int[_ar_p2_size];
            String elements_p2 = Console.ReadLine();
            String[] split_elements_p2 = elements.Split(' ');
            for (int _ar_i = 0; _ar_i < _ar_size; _ar_i++)
            {
                _ar[_ar_i] = Convert.ToInt32(split_elements_p2[_ar_i]);
            }

            insertionSort_p2(_ar_p2);
            Console.ReadLine();
            Console.Clear();
        }
        static void insertionSort_p1(int[] ar)
        {
            //array is zero-indexed. cursor is final position
            int cursor = ar.Length - 1;
            int _ar_compare = ar[cursor];

            //starting at the second item and working left  
            for (int i = cursor; i >= 0; i--)
            {

                //leave the for loop with i=0
                if (_ar_compare > ar[i - 1])
                {
                    ar[i] = _ar_compare;
                    i = 0;
                }

                //move to next item
                else
                {
                    ar[i] = ar[i - 1];
                    if (i == 1)
                    {
                        ar[i - 1] = _ar_compare;
                    }
                }
                foreach (var item in ar)
                {
                    Console.Write($"{item} ");
                }
                Console.WriteLine();

                // reaches last position in array
            }
        }

        static void insertionSort_p2(int[] ar)
        {

        }
    }
}