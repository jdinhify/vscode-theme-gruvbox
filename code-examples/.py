'''Binary Tree node class and traversal functions

A node object holds a value, and optional left and/or right child
'''

class node:
	'''Binary Tree Node'''
	def __init__(self, value, left=None, right=None):
		self.value = value
		self.left = left
		self.right = right

	def __str__(self, unicode=True, spacing='  '):
		'''Returns subtree starting from this node

		Use the unicode flag to use unicode numbers (unicode characters are still used for the branches)
		'''
		ret = ''
		if self.right: # right branch
			ret += self.right.__str__(spacing = spacing[:-2] + ('│ ' if spacing[-2:] == '└─' else '  ') + '┌─', unicode=unicode)
		ret += spacing + (chr(self.value + (10121 if self.value < 11 else 9440)) if unicode else str(self.value)) + '\n'
		if self.left: # left branch
			ret += self.left.__str__(spacing = spacing[:-2] + ('│ ' if spacing[-2:] == '┌─' else '  ') + '└─',unicode=unicode)

		return ret

	def __repr__(self):
		return "<class 'node'>\n%s" % str(self.__str__())[:-1]

	def print_tree(self, unicode=True):
		'''Print subtree starting from this node'''
		print(str(self.__str__(unicode=unicode))[:-1])