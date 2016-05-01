# 
Hex editor/viewer

[What`s a good hex editor/viewer for the mac](http://stackoverflow.com/questions/827326/whats-a-good-hex-editor-viewer-for-the-mac)

Open the file in Vim.
Run the command

:% ! xxd
Edit.
Once done, run

:% ! xxd -r
Save.
