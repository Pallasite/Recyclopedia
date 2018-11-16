import unittest
import psycopg2

# Runs the whole test suite for unit tests
# pertaining to the database
# TODO replace each print(Test not implemented) with calls to test methods

# A Class for the Database Tests

test_count = 0
test_pass = 0 

def Test_Annc(number, title, desc):
    print("Test " + str(number) + " : " + title)
    print("**" + desc + "**\n\tResult:")
    print("\tTest not implemented\n")


print("-----------------\nDATABASE Tests\n-----------------")

cases = TestDatabaseCases()

Test_Annc(1, "CONNECTION", "Test a connection to a local database")
test_count = test_count + 1
Test_Annc(2, "NULL QUERY", "Test an empty query")
test_count = test_count + 1
Test_Annc(3, "SIMPLE QUERY", "Test getting an item from a database")
test_count = test_count + 1
Test_Annc(4, "FIND GROUPS", "Test a query which can return a list of ids which are subsetted under this item")
test_count = test_count + 1
Test_Annc(5, "ADD A RECORD", "Add a record as an administrator")
test_count = test_count + 1

print("Total Results: " + str(test_pass) + " out of " + str(test_count) + " passed.")
        
