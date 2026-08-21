# File System(FS Module)
- FS module directly communicates to operating system rather than common operation on a file or folder are:
1. Fle-> write file,read file,append file
2. Folder-> mkdir/md,rmdir/rm,readdir
3. File metadata-> stat,lstat,rstat
4. Watch-> watch,unwatch
5. Stream-> readStream(),writeStream()
 
 - All functions are promise so it must be called with await keyword.

 # CRUD Project
 C-Create R-Retrieve U-Update D-Delete

 1. User can add any product (id,name,price,qty) into cart
 2. User can see all the items of the cart.
 3. User can remove item from cart.
 4. User can also update quantity of product.
 5. All the items should be stored after termination of project.