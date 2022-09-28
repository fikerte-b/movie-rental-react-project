# reactProject
Online Movie rental
•	The app has two roles, admin, and users. Admin can add, update, delete and save all the movies while the users can view and rent movies.
•	The rent button   will take to the rent page where it calculates total rent price based on the rental duration (days) and the discount based on the rental day.
•	The sign up and login pages verify the information.
•	The storage is done  use context and the style is done without a library.

The component tree:

----------------Admin
                    ------------MovieList
                    -------------MovieEdit
----------------Home
                    -----------Header
                    ------------Navbar
----------------Movie
                    ------------MovieDetails
----------------AuthContext
----------------Rent
----------------Signup
----------------Login
----------------App

