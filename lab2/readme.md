# File System(FS Module)
- FS module directly communicates to operating system rather than common operation on a file or folder are:
1. Fle-> write file,read file,append file
2. Folder-> mkdir/md,rmdir/rm,readdir
3. File metadata-> stat,lstat,rstat
4. Watch-> watch,unwatch
5. Stream-> readStream(),writeStream()
 
 - All functions are promise so it must be called with await keyword.